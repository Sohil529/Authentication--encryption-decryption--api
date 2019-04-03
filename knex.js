const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "sk@96877",
        database: "controllers"
    }
});
module.exports = knex;