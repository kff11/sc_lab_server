module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'user', // 테이블의 이름을 지정합니다.
        {
            number: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            admin: {
                type: DataTypes.STRING(3),
                allowNull: false
            },

            id: {
                type: DataTypes.STRING(20),
                allowNull: false
            },

            password: {
                type: DataTypes.STRING(80),
                allowNull: false
            },

            name: {
                type: DataTypes.STRING(25),
                allowNull: false,
                defaultValue: 0
            },

            studentId: {
                type: DataTypes.STRING(15),
                allowNull: false
            },

            signUp_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};