'use strict'

const authors = (sequelize, DataTypes) => sequelize.define('authors', {
    name: {
        type: DataTypes.STRING
    },
    numOfBooks: {
        type: DataTypes.INTEGER
    }
});

module.exports = authors;