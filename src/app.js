const express = require('express');
const cors = require('cors');

require("dotenv-safe").config();
const db = require('./database/mongoConfig');
const serieRoutes = require('./routes/serieRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/series", serieRoutes);

db.connect();

module.exports = app