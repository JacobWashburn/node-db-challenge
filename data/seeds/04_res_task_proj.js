exports.seed = function (knex) {
    return knex('res_task_proj').insert([
        {project_id: 2, task_id: 1, resource_id: 6},
        {project_id: 2, task_id: 1, resource_id: 9},
        {project_id: 2, task_id: 2, resource_id: 7},
        {project_id: 2, task_id: 3, resource_id: 7},
        {project_id: 2, task_id: 3, resource_id: 8},
        {project_id: 1, task_id: 4, resource_id: 1},
        {project_id: 1, task_id: 5, resource_id: 2},
        {project_id: 1, task_id: 6, resource_id: 5},
        {project_id: 1, task_id: 4, resource_id: 1},
        {project_id: 3, task_id: 5, resource_id: 5},
        {project_id: 3, task_id: 7, resource_id: 10},
        {project_id: 3, task_id: 8, resource_id: 12},
        {project_id: 3, task_id: 9, resource_id: 11},
        {project_id: 3, task_id: 10, resource_id: 10},
        {project_id: 3, task_id: 11, resource_id: 16},
        {project_id: 3, task_id: 11, resource_id: 13}
    ]);
};
