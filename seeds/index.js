const sequelize = require('../config/sequelize');
const {User} = require('../models');

const seedDb = async () => {
    await sequelize.sync({force: true});


    await U
}