'use strict'

const food = (sequelize,DataTypes)=> sequelize.define('FOOD', {
    flavour:{
     type: DataTypes.STRING
    },
color: {
    type:  DataTypes.STRING
}
});

module.exports = food;