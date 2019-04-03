const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const key = 'd6F3Efeq';
const knex = require('../knex');
router.get('/', (req, res, next) => {
    res.send('ok');
})
router.post('/api/v1/idpassword', async function (req, res) {

    const encrepted_username = encrypt(req.body.username);
    const encrepted_password = encrypt(req.body.password);
    const result = await knex("public.controller").insert({
        username: encrepted_username,
        passwords: encrepted_password,
        mac: req.body.mac,
        submited_date: new Date()
    });

    res.sendStatus(201);

});

const encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, key)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = router;