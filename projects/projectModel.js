const db = require('../data/db.js');

module.exports = {
    getProjects,
    addProject,
};

function getProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(() => {
            return db('projects')
                .where('project_name', project.project_name);
        });
}