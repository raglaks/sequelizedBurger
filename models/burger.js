module.exports = function(sequelize, DataTypes) {

    const Burger = sequelize.define("burgers", {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate :{ 
                    len: {
                    args: [0, 50],
                    msg: 'The name is too long'
                }
            }
        },

        devoured: {

            type: DataTypes.BOOLEAN,
            defaultValue: false

        }

    });

    return Burger;

};