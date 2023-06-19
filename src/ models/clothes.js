'use strict';


const Clothes = (sequelize,DataTypes) => sequelize.define('TheClothes',{
    clothesName:{
        type:DataTypes.STRING,
    },

    Price:{
        type:DataTypes.INTEGER
    }
})
module.exports= Clothes;