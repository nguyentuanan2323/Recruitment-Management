
const Sequelize = require('sequelize');
//connect database sql



module.exports = new Sequelize('Recuirement', 'corbinnguyen', '123@Tuanan1996', {
    host: 'recuirement.database.windows.net',
    dialect: 'mssql',
    port:1433,
    dialectOptions: {
        encrypt: true,
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        instanceName: 'recuirement.database.windows.net'
    },
    timezone: '+07:00'
});

