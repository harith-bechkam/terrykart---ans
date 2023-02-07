const Sequelize = require('sequelize');
const db = require('../config/database')

const customer = db.define('customer', {
    mailing_name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    gst_no: {
        type: Sequelize.STRING
    },
    pan_no: {
        type: Sequelize.STRING
    },
    created_by: {
        type: Sequelize.STRING
    },
    modified_by: {
        type: Sequelize.STRING
    }
},{freezeTableName: true})

module.exports = customer;
