var express = require("express");
var app = express();
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define Project Schema
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// REST API route
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});