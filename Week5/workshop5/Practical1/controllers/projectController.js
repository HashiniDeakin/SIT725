const projectService = require('../services/projectService');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    res.json({ statusCode: 500, message: error.message });
  }
};