const path = require('path');
const model = require('./model');
const moment = require('moment');
require('moment-timezone');

const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt = require(path.join(__dirname, 'config', 'db.json')).salt;

moment.tz.setDefault("Asia/Seoul");
const now_date = moment().format('YYYY-MM-DD HH:mm:ss');

module.exports = {
    user: {
        login: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);

            model.user.findId(body, hash, result => {
                let obj = {};
                if (result[0]) {
                    obj['suc'] = true;
                } else {
                    obj['suc'] = false;
                }

                res.send(obj);
            })
        },
        signUp: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);

            model.user.addUser(body, hash, now_date, result => {
                result.result = result;
                res.send(result.result);
            })
        }
    }
}