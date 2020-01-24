exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('description', 256);
        tbl.boolean('completed').defaultTo(false);
    })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 256)
                .notNullable();
            tbl.string('notes', 300);
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 256)
                .notNullable();
            tbl.string('description', 256);
        })
        .createTable('res_task_proj', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .notNullable();
            tbl.integer('task_id')
                .unsigned()
                .references('id')
                .inTable('tasks')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .notNullable();
            tbl.integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('res_task_proj')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
