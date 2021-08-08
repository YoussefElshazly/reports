const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');

const Report = require('../../models/Report');
const errorHandler = require('../../errorHandler');

const router = express.Router();

const populate = [];

// Create
router.post('/', async (req, res) => {
  try {
    const report = new Report(req.body);

    await report.save();

    await Report.populate(report, populate);

    res.status(201).json(report);
  } catch (error) {
    const reformattedError = errorHandler.reformatAndLog(undefined, error);

    res.status(reformattedError.statusCode).json(reformattedError);
  }
});

// Read
// /api/v1/reports?fields=-_id,firstName,lastName
// /api/v1/reports?limit=10&skip=20
// /api/v1/reports?sortBy=createdAt:desc
router.get('/', async (req, res) => {
  try {
    const match = {};

    let fields;

    if (req.query.fields) {
      fields = req.query.fields.replace(/,/g, ' ');
    }

    match.state = { $ne: 'Blocked' };

    const sort = {};

    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');

      if (parts[1]) {
        switch (parts[1].toLowerCase()) {
          case 'desc':
            sort[parts[0]] = -1;
            break;

          case 'asc':
            sort[parts[0]] = 1;
            break;

          default:
            break;
        }
      }
    } else {
      sort.createdAt = -1;
    }

    const reports = await Report.find(match)
      .select(fields)
      .limit(Number(req.query.limit))
      .skip(Number(req.query.skip))
      .sort(sort)
      .populate(populate);

    res.json(reports);
  } catch (error) {
    const reformattedError = errorHandler.reformatAndLog(undefined, error);

    res.status(reformattedError.statusCode).json(reformattedError);
  }
});

// Update by ID
router.put('/:id', async (req, res) => {
  try {
    const error = new Error();

    error.name = 'NotFoundError';
    error.message = "We couldn't find the report you are looking for.";

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw error;
    }

    const updatesKeys = Object.keys(req.body);
    const allowedUpdatesKeys = ['state'];
    const isValidOperation = updatesKeys.every((updatesKey) => allowedUpdatesKeys.includes(updatesKey));

    if (!isValidOperation) {
      error.name = 'ValidationError';
      error.errors = {};

      updatesKeys.forEach((updatesKey) => {
        if (!allowedUpdatesKeys.includes(updatesKey)) {
          error.errors[updatesKey] = { message: `${_.upperFirst(_.lowerCase(updatesKey))} cannot be modified.` };
        }
      });

      throw error;
    }

    const match = {
      _id: req.params.id,
    };

    const report = await Report.findOne(match);

    if (!report) {
      throw error;
    }

    updatesKeys.forEach((updatesKey) => {
      report[updatesKey] = req.body[updatesKey];
    });

    await report.save();

    await Report.populate(report, populate);

    res.json(report);
  } catch (error) {
    const reformattedError = errorHandler.reformatAndLog(undefined, error);

    res.status(reformattedError.statusCode).json(reformattedError);
  }
});

module.exports = router;
