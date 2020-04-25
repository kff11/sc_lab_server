const sequelize = require('./models').sequelize;

const {
    User,
    Sequelize: {Op}
} = require('./models');
sequelize.query('SET NAMES utf8;');
module.exports = {
    user: {
        findId: (body, hash, callback) => {
            User.findAll({
                where: {[Op.and]: [{id: body.id, password: hash}]}
            }).then(data => {
                callback(data)
            }).catch(err => {
                throw err;
            })
        }
    }
}