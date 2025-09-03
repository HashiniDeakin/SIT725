var express = require("express");
var app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const projectsRoute = require('./routes/projects');

// Use routes
app.use('/api/projects', projectsRoute);

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});