const knex = require('knex')

const mysql = knex({
  client: 'mysql',
  connection: {
    host: '120.77.155.229',
    user: 'admin',
    password: 'Heroson_1993',
    database: 'tysql'
  },
  pool: { min: 0, max: 7 }
})

module.exports = mysql