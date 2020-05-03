const sequelize = require('./models').sequelize;

const {
    User,
    Lab_Seat_319,
    Lab_Seat_320,
    Sequelize: {Op}
} = require('./models');
sequelize.query('SET NAMES utf8;');
module.exports = {
    user: {
        findId: (body, hash, callback) => {
            User.findAll({
                where: {[Op.and]: [{id: body.id, password: hash}]}
            }).then(data => {
                callback({
                    suc: true,
                    name: data[0].dataValues.name,
                    studentId: data[0].dataValues.studentId
                })
            }).catch(err => {
                throw err;
            })
        },
        addUser: (body, hash, now, callback) => {
            User.count({
                where: {id: body.id},
            }).then(cnt => {
                if (cnt > 0) {
                    callback(false);
                } else {
                    User.create({
                        id: body.id,
                        password: hash,
                        studentId: body.studentId,
                        name: body.name,
                        admin: body.admin,
                        signUp_date: now
                    }).then(() => callback(true));
                }
            })
        }
    },
    reserve: {
        lab319: (body, now, callback) => {
            Lab_Seat_319.update({
                state: body.state,
                name: body.name,
                studentId: body.studentId,
                useTime: now,
            }, {where: {number: body.number}})
                .then(() => callback(true))
                .catch(err => {
                    throw err;
                })
        },
        lab320: (body, now, callback) => {
            Lab_Seat_320.update({
                state: body.state,
                name: body.name,
                studentId: body.studentId,
                useTime: now,
            }, {where: {number: body.number}})
                .then(() => callback(true))
                .catch(err => {
                    throw err;
                })
        },
    },
    getState: {
        lab319: (body, callback) => {
            Lab_Seat_319.findAll()
                .then(data => {
                    let obj = {};
                    for(let i = 0; i < 36, i++;){
                        obj[i] = data[i].dataValues.state;
                    }
                    console.log(obj);
                    callback(obj)
                })
        },
        lab319: (body, callback) => {
            Lab_Seat_320.findAll()
                .then(data => {
                    console.log(data);
                    callback(data)
                })
        }

    }
}

