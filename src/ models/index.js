'use strict'

const { Sequelize, DataTypes } = require("sequelize");

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' :  process.env.DB_URI;

// let sequelizeOptions =
//     process.env.NODE_ENV === "production"
//         ? {
//             dialectOptions: {
//                 ssl: false,
//             },
//         }
//     : {};

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
    }
} : {}

let sequelize = new Sequelize(DB_URL, sequelizeOptions);

    const clothes = require('./clothes')
    const food = require('./food')
    const books = require('./books')
    const authors = require('./authors')
    const Collection = require("./collection");

    const foodModel = food(sequelize, DataTypes)
    const clothesModel = clothes(sequelize, DataTypes)
    const booksModel = books(sequelize, DataTypes)
    const authorsModel = authors(sequelize, DataTypes)

    authorsModel.hasMany(booksModel, {foreignKey: 'authorsId', sourceKey: 'id'});

    booksModel.belongsTo(authorsModel, {foreignKey: 'authorsId', targetKey: 'id'})


    const foodCollection = new Collection(foodModel)
    const clothesCollection = new Collection(clothesModel)
    const booksCollection = new Collection(booksModel)
    const authorsCollection = new Collection(authorsModel)



module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes),
    foodCollection,
    clothesCollection,
    booksCollection,
    authorsCollection
}