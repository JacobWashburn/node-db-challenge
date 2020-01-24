require('dotenv').config();

module.exports = {
  development: {
    client: 'postgres',
    connection: {host : 'localhost',
      user : 'postgres',
      password : process.env.DB_PASS,
      database : 'Projects'},
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'postgres',
    connection: {host : 'localhost',
      user : 'postgres',
      password : process.env.DB_PASS,
      database : 'Projects'},
    pool: {
            min: 2,
            max: 10,
        },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'postgres',
    connection: {host : 'localhost',
      user : 'postgres',
      password : process.env.DB_PASS,
      database : 'Projects'},
    pool: {
            min: 2,
            max: 10,
        },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};
