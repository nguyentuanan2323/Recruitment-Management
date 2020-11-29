
const Sequelize = require('sequelize');
//connect database sql



module.exports = new Sequelize('Recuirement', 'sa', 'corbinnguyen1996', {
    host: '127.0.0.1',
    dialect: 'mssql',
    port:1433,
    dialectOptions: {
        encrypt: true,
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        instanceName: 'MSSQLSERVER124234324'
    },
    timezone: '+07:00'
});

