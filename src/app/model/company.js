const Sequenlize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../../../database_sql');


const Company = db.define('Company', {
    Id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    JobId:{
        type: DataTypes.INTEGER// Khóa ngoại tới Jobid
    },
    Introduce:{
        type: DataTypes.STRING(5000)
    },
    ProductBusiness : {
        type: DataTypes.STRING(5000),
    },
    Service: {
        type : DataTypes.STRING(5000)
    },
    ImagesLink: {
        type: DataTypes.STRING(5000)
    },
<<<<<<< HEAD
    LogoLink: {
        type: DataTypes.STRING(5000)
    },
=======
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
    VideoLink: {
        type: DataTypes.STRING(5000)
    },
    PolicyBenifit: {
        type: DataTypes.STRING(5000)
<<<<<<< HEAD
    },
    Address: {
        type: DataTypes.STRING(4000)
=======
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
    }
},{
    freezeTableName: true,
    timestamps: false
});
module.exports = Company;

