"use strict";
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('Course_db', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database: ', err);
});
const models = [
    require('../models/course.js'),
];
let db = {};
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db[seqModel.name] = seqModel;
});
Object.keys(db).forEach((key) => {
    if ('associate' in db[key]) {
        db[key].associate(db);
    }
});
module.exports = db;
