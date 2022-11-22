require('dotenv').config()
module.exports = {
  development: {
    database: 'int_development',
    dialect: 'postgres'
  },
  test: {
    database: 'database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

// {
//   "development": {
//     "database": "int_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
