const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "",
        database: "controllers"
    }
});
module.exports = knex;