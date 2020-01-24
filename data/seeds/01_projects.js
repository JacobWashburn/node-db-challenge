exports.seed = function (knex) {
    return knex('projects').insert([
        {project_name: 'yard work', description: 'need to have this done by thursday'},
        {project_name: 'do the dishes', description: 'doing dishes includes doing the counters and table.'},
        {project_name: 'maintenance on truck', description: 'change oil, oil filter, air filter, and check the brakes and tires.'}
    ]);
};
