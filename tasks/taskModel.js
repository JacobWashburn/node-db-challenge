const db = require('../data/db.js');

module.exports = {
    getTasks,
    addTask
};

function getTasks() {
    return db('tasks');
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(() => {
            return db('tasks as t')
                .join('projects as p', 't.project_id', 'p.id')
                .select('t.id as task_id','t.description as task_description', 'notes', 'project_name', 'p.description as project_description')
                .where('t.description', task.description)
        })
}