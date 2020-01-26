const db = require('../data/db.js');

module.exports = {
    getProjects,
    addProject,
    getProjectDetails
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

async function getProjectDetails(id) {
    return db('tasks')
        .where('project_id', id)
        .then(tasks => {
            console.log('tasks log-------',tasks);
            return db('projects')
                .where('id', id)
                .then(proj => {
                    console.log('project log-------',proj);
                    return db('resources as r')
                        .join('res_task_proj as rtp', 'r.id', 'rtp.resource_id')
                        .where('rtp.project_id', id)
                        .then(rscs => {
                            console.log('resources log--------',rscs);
                            return {
                                ...proj,
                                tasks:
                                     [...tasks],
                                    resources: [...rscs]
                            };
                        })
                        .catch(error => {
                            console.log('get resources error-------',error);
                        })
                });
        });
}