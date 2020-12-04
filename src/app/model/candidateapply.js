const Sequenlize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../../../database_sql');


const candidateApply = db.define('CandidateApply', {
    Id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    JobId:{
        type: DataTypes.INTEGER// Khóa ngoại tới Jobid
    },
    Status:{
        type: DataTypes.ENUM(['Applied', 'Cancel','Saved'])
    },
    Rating:{
        type: DataTypes.INTEGER// Khóa ngoại tới Jobid
    },
    Remark:{
        type: DataTypes.STRING(1000)
    }

},{
    freezeTableName: true,
    timestamps: false
});
module.exports = candidateApply;

