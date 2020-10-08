
const Sequelize = require('sequelize');
//connect database sql

module.exports = new Sequelize('Recuirement', 'sa', 'corbinnguyen1996', {
    host: '192.168.1.5',
    dialect: 'mssql',
    port:1433,
    dialectOptions: {
        encrypt: true,
        instanceName: 'MSSQLSERVER124234324'
    }
});

