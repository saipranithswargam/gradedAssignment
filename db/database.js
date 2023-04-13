const { Sequelize} = require("sequelize")

const sequelize = new Sequelize('S20210010220', 'user', 'pass', {
    dialect: 'sqlite',
    host: "./S20210010220.sqlite"
})


module.exports = sequelize;