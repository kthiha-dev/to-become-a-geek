require ('custom-env').env('staging');
var knex = require('knex')({
    client: 'mysql',
    //rsversion: '5.7',
    connection: {
      host : process.env.DATA_DB_HOST,
      user : process.env.DATA_DB_USER,
      password : process.env.DATA_DB_PASS,
      database : process.env.DATA_DB_NAME
    }
});

module.exports = knex;