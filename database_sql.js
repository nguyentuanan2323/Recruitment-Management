
const Sequelize = require('sequelize');
//connect database sql

<<<<<<< HEAD


module.exports = new Sequelize('Recuirement', 'corbinnguyen', '123@Tuanan1996', {
    host: 'recuirement.database.windows.net',
=======
module.exports = new Sequelize('Recuirement', 'sa', 'corbinnguyen1996', {
    host: '192.168.1.5',
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
    dialect: 'mssql',
    port:1433,
    dialectOptions: {
        encrypt: true,
<<<<<<< HEAD
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        instanceName: 'recuirement.database.windows.net'
    },
    timezone: '+07:00'
=======
        instanceName: 'MSSQLSERVER124234324'
    }
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
});

