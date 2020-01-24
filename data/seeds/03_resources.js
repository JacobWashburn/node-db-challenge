exports.seed = function (knex) {
    return knex('resources').insert([
        {resource_name: 'dish rag', description: 'stuff'},
        {resource_name: 'towel', description: 'stuff'},
        {resource_name: 'dish soap', description: 'stuff'},
        {resource_name: 'dishwasher detergent', description: 'stuff'},
        {resource_name: 'sanitizing wipes', description: 'stuff'},
        {resource_name: 'large mower', description: 'stuff'},
        {resource_name: 'edge trimmer', description: 'stuff'},
        {resource_name: 'trash bag', description: 'stuff'},
        {resource_name: 'gasoline', description: 'stuff'},
        {resource_name: '5w-30 oil', description: 'stuff'},
        {resource_name: 'air filter # 12365', description: 'stuff'},
        {resource_name: 'oil filter #124665', description: 'stuff'},
        {resource_name: 'tire iron', description: 'stuff'},
        {resource_name: 'jack', description: 'stuff'},
        {resource_name: 'jack stands', description: 'stuff'},
        {resource_name: 'tread depth finder', description: 'stuff'}
    ]);
};
