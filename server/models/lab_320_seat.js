module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'lab_320_seat',
        {
            number: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            state: {
                type: DataTypes.INTEGER(3),
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

            useTime: {
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