const db = require('../data/db.js');

module.exports = {
    getProjects,
    addProject,
    getProjectDetails,
    getstuff
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

function getProjectDetails(id) {
    return db('tasks')
        .where('project_id', id)
        .then(tasks => {
            return db('projects')
                .where('id', id)
                .then(proj => {
                    return db('resources as r')
                        .join('res_task_proj as rtp', 'r.id', 'rtp.resource_id')
                        .where('rtp.project_id', id)
                        .then(rscs => {
                            return {
                                ...proj,
                                tasks: [...tasks],
                                resources: [...rscs]
                            };
                        })
                        .catch(error => {
                            console.log('get resources error-------', error);
                        });
                })
                .catch(error => {
                    console.log('get a project by id error------------', error);
                });
        })
        .catch(error => {
            console.log('get tasks by project id error----------', error);
        });
}

async function getstuff(id) {
    const tasks = await db('tasks')
        .where('project_id', id);
    console.log(tasks);
    const project = await db('projects')
        .where('id', id);

    const resources = await db('resources as r')
        .join('res_task_proj as rtp', 'r.id', 'rtp.resource_id')
        .where('rtp.project_id', id);

    return {
        ...project,
        tasks: [...tasks],
        resources: [...resources]
    };
}