module.exports = function(sequelize, DataTypes) {

    const Customer = sequelize.define("customers", {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        cname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate :{ 
                    len: {
                    args: [0, 50],
                    msg: 'The name is too long'
                }
            }
        }

    });

    return Customer;

}