module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "biblo_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    define: {
      underscored: true,
      paranoid: true
    }
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
