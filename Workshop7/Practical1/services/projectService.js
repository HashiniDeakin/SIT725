const Project = require('../models/project');

const getAllProjects = async () => {
  return await Project.find({});
};

module.exports = { getAllProjects };