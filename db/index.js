const {Pool, Client} = require('pg');
const connectionString = "postgresql://postgres@localhost:5432/redditApiDB";

const pool = new Pool({ connectionString: connectionString });
module.exports = pool;