const sequelize = require('sequelize')
const db = new sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})


const User = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: sequelize.STRING,
        allownull: false
    }
})


const Product = db.define('products', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: sequelize.STRING,
        allownull: false
    },

    manufacturer: sequelize.STRING,
    price: {
        type: sequelize.FLOAT,
        allownull: false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(() => console.log('database has been synced'))
    .catch((err) => console.error('error creating database'))


exports = module.exports = {
    User, Product
}