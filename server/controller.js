const path = require('path');
const model = require('./model');

const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt = require(path.join(__dirname, 'config', 'db.json')).salt;

module.exports = {
    user: {
        login: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);

            model.api.searchInfo(body, hash, result => {
                let obj = {};
                if (result[0]) {
                    obj['suc'] = true;
                    obj['msg'] = '로그인 성공!';
                } else {
                    obj['suc'] = false;
                    obj['msg'] = '로그인 실패!';
                }

                res.send(obj);
            })
        }
    }
}