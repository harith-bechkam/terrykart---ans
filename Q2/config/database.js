const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'database_development',
    'root',
    'rootroot',
    {
        dialect: 'mysql',
        host: 'localhost',  
        logging: false //winston.debug
    }
)
sequelize.authenticate()
    .then(() => {
        console.log('Connected to database_development DB');
    })
    .catch(err => {
        console.error('Unable to connect to the database_development DB:', err);
    });

sequelize.sync()
    .then(() => {
        console.log(`Tables created!`);
    });

module.exports = sequelize
