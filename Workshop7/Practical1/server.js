var express = require("express");
var app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB on host machine
mongoose.connect('mongodb://host.docker.internal:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Import routes
const projectsRoute = require('./routes/projects');

// Use routes
app.use('/api/projects', projectsRoute);

var port = process.env.port || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});