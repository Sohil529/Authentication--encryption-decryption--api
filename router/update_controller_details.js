const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const key = 'd6F3Efeq';
const knex = require('../knex');
router.get('/', (req, res, next) => {
    res.send('ok');
})
router.put('/api/v1/idpassword', async function (req, res) {

    const updated_username = encrypt(req.body.username);
    const updated_password = encrypt(req.body.password);
    // console.log(encrepted_password);
    const result = await knex("public.controller").where('mac', req.query.mac).update({
        username: updated_username,
        passwords: updated_password,
        mac: req.body.mac,
        submited_date: new Date()
    });
    console.log(result)

    res.send(201);

});

const encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, key)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = router;