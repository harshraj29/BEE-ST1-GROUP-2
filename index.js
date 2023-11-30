const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

//require app
require('events').EventEmitter.defaultMaxListeners = 15;
const app = express();

//Assign port Number
const port = 8000;

// Middleware
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Server Create
app.listen(port, (err) => {
  //any Error print err message
  if (err) {
    console.log("err msg", err);
  } else {
    console.log("This Server is Running in Port", port);
  }
});