const db = require('../data/db.js');

module.exports = {
    getResources,
    addResource,
    getLinked
};

function getResources() {
    return db('resources');
}

function getLinked() {
    return db('res_task_proj');
}

function addResource(resource,taskId,projectId) {
    return db('resources')
        .insert(resource)
        .then(() => {
            return db('resources')
                .where('resource_name', resource.resource_name)
                .then(addedResource => {

                    db('res_task_proj')
                        .insert({
                            project_id: projectId,
                            task_id: taskId,
                            resource_id: addedResource.id
                        });
                    return addedResource
                })
        })
}