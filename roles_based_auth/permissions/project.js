const { ROLES } = require("../data");

function canViewProject(user, project) {
  return user.role === ROLES.ADMIN || user.id === project.id;
}

function scoopedProjects(user, projects) {
  if (user.role === ROLES.ADMIN) return projects;
  return projects.filter((project) => project.userID === user.id);
}
module.exports = {
  canViewProject,
  scoopedProjects,
};
