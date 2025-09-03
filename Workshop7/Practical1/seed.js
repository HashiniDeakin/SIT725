const mongoose = require('mongoose');
const Project = require('./models/project');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Sample data
const sampleProjects = [
  {
    title: "Kitten",
    image: "images/kitten.jpg",
    link: "About Kitten",
    description: "Hello There! I just wanted to say HI to you guys. See ya!"
  },
  {
    title: "Kitten 2",
    image: "images/kitten2.png",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
  }
];

// Insert sample data
async function seedDB() {
  await Project.deleteMany({}); // Clear existing data
  await Project.insertMany(sampleProjects);
  console.log("Sample projects saved!");
  mongoose.connection.close();
}

seedDB();