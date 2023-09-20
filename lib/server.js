'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// This middleware runs across entire application
app.use((req, res, next) => {
  console.log('REQUEST METHOD' + req.method);
  console.log('REQUEST PATH' + req.path);
});

// Middleware only runs for requests with a method GET and a path /person
app.get('/person', (req, res) => {

  res.send(`Person's name`);

});

module.export = app;