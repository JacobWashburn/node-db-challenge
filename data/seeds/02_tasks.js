exports.seed = function (knex) {
    return knex('tasks').insert([
        {description: 'use the big mower on the lawn', notes: 'notes left blank', project_id: 1},
        {description: 'trim the hedges', notes: 'notes left blank', project_id: 1},
        {description: 'cleanup the edges and pickup clippings', notes: 'notes left blank', project_id: 1},
        {description: 'fit as much in the dishwasher as you can', notes: 'notes left blank', project_id: 2},
        {description: 'clean off all the counters and wash them down', notes: 'notes left blank', project_id: 2},
        {description: 'clean off the table and wash it down', notes: 'notes left blank', project_id: 2},
        {description: 'change the oil', notes: 'notes left blank', project_id: 3},
        {description: 'replace the oil filter', notes: 'notes left blank', project_id: 3},
        {description: 'change the air filter', notes: 'notes left blank', project_id: 3},
        {description: 'check brakes', notes: 'notes left blank', project_id: 3},
        {description: 'check tread on tires and rotate them', notes: 'notes left blank', project_id: 3}
    ]);
};
