const path = require('path');
const model = require('./model');
const moment = require('moment');
require('moment-timezone');

const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt = require(path.join(__dirname, 'config', 'db.json')).salt;

moment.tz.setDefault("Asia/Seoul");

module.exports = {
    user: {
        login: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);

            model.user.findId(body, hash, result => {
                let obj = {};
                if (result[0]) {
                    obj['suc'] = true;
                    obj['studentId'] = result.studentId;
                } else {
                    obj['suc'] = false;
                }

                res.send(obj);
            })
        },
        signUp: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);
            const now_date = moment().format('YYYY-MM-DD HH:mm:ss');

            model.user.addUser(body, hash, now_date, result => {
                let obj = {};
                if (result) {
                    obj['isSign'] = false;
                } else {
                    obj['isSign'] = true;
                }

                res.send(obj);
            })
        }
    },
    seat: {
        reserve: (req, res) => {
            const body = req.body;
            const now_date = moment().format('YYYY-MM-DD HH:mm:ss');

            model.lab319.reserve(body, now_date, result => {

            })
        }
    }
}