//Define modules
const express = require('express');
const router = express.Router();
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);
const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "sk@96877",
        database: "controllers"
    }
});

router.get('/', (req, res, next) => {
    res.send('ok');
})

// router.post('/api/v1/idpassword', async function (req, res) {
//     console.log(JSON.stringify(req.body));
//     const result = await knex("public.controller").insert({
//         username: req.body.username,
//         password: hash,

//         mac: req.body.mac,
//         submited_date: new Date()
//     });

//     // const encryptedString = cryptr.encrypt(result);
//     // const decryptedString = cryptr.decrypt(encryptedString);

//     res.send(result);
//     console.log(result);
//     // console.log(decryptedString); 

//     // cryptPassword(result);
//     // res.send(result);
// });

// router.get("/api/v1/idpassword", async function (req, res) {
//     const result = await knex("public.controller")
//         .distinct("mac")
//         .select("controller.*");

//     // const encryptedString = cryptr.encrypt(result);
//     const decryptedString = cryptr.decrypt(result);

//     res.send(decryptedString);
//     console.log(decryptedString);
// });

module.exports = router;