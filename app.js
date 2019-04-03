/*Define modules*/
const express = require('express');
// const dotenv = require('dotenv');
const app = express();
const bodyparser = require('body-parser');
// const routes = require('./router/controller_id_password');
const routes = require('./router/add_controller_details');
const randomroutes = require('./router/get_controller_details');
const updateduser = require('./router/update_controller_details');
// const randomroutes = require('./router/user_routes.js');
const PORT = process.env.PORT || 6100;
const knex = require('./knex');

/*parse the json*/
app.use(bodyparser.json());

/* setting up the env config*/
// dotenv.config({
//     path: './env'
// });

/* routes*/
app.use(routes);
app.use(randomroutes);
app.use(updateduser);
/*server start*/
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});