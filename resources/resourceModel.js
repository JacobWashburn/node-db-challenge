const db = require('../data/db.js');

module.exports = {
    getResources,
    addResource,
    getLinked,
    getprojectres
};

function getResources() {
    return db('resources');
}

function getLinked() {
    return db('res_task_proj');
}

function addLink(link) {
    return db('res_task_proj')
        .insert(link)
        .catch(error => {
            console.log('adding to res_task_proj error', error,);
        });
}

function getprojectres(id) {
    return db('res_task_proj as rtp')
        .join('resources as r', 'r.id', 'rtp.resource.id')
        .join('projects as p', 'p.id', 'rtp.project_id')
        .where('p.id', id)
        .then(rscs => {
                console.log('resources log--------', rscs);
                return {

                    resources: {...rscs}
                };
            }
        )
        .catch(error => {
            console.error('get resources error-------\n      --- \n      ---\n      ---\n', error);
        });
}

function addResource(resource, taskId, projectId) {
    return db('resources')
        .insert(resource)
        .then(() => {
            return db('resources')
                .where('resource_name', resource.resource_name)
                .first()
                .then(addedResource => {
                    const newLink = {
                        project_id: projectId,
                        task_id: taskId,
                        resource_id: addedResource.id
                    };
                    return addLink(newLink)
                        .then(() => {
                            return addedResource;
                        });
                });
        });
}