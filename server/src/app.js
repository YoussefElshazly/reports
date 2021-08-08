const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./db');

const app = express();

db.connect();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use('/api/v1/reports', require('./routes/v1/reports'));

module.exports = app;
