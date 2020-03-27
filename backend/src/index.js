const express = require('express');
const cors = require('cors');
const env = require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);