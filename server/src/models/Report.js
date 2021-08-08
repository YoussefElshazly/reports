const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    reportType: {
      type: String,
      required: [true, 'You must choose a report type.'],
      enum: {
        values: ['Spam'],
        message: "The Report type you've chosen is invalid.",
      },
    },
    source: {
      type: String,
      required: [true, 'You must choose a source.'],
      enum: {
        values: ['Report'],
        message: "The source you've chosen is invalid.",
      },
    },
    state: {
      type: String,
      required: [true, 'You must choose a state.'],
      enum: {
        values: ['Opened', 'Blocked', 'Resolved'],
        message: "The state you've chosen is invalid.",
      },
    },
    message: {
      type: String,
      required: [true, "Message can't be blank."],
      trim: true,
    },
    referenceResourceType: {
      type: String,
      required: [true, 'You must choose a reference resource type.'],
      enum: {
        values: ['Post', 'Replay', 'Article'],
        message: "The Reference Resource Type you've chosen is invalid.",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
