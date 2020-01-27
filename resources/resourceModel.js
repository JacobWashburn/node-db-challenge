const db = require('../data/db.js');

module.exports = {
    getResources,
    addResource,
    getLinked,
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