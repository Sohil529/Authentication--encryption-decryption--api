const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const key = 'd6F3Efeq';
const knex = require('../knex');
router.get('/', (req, res, next) => {
    res.send('ok');
})

router.get('/api/v1/idpassword', async function (req, res) {
    const result = await knex("public.controller")
        .select('*').where('mac', req.query.mac).first()

    const decrepted_username = decrypt(result.username);
    const decrepted_password = decrypt(result.password);


    res.send({
        username: decrepted_username,
        password: decrepted_password
    });

});

// $_GET["id"]


const decrypt = (text) => {
    var decipher = crypto.createDecipher(algorithm, key)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}
module.exports = router;