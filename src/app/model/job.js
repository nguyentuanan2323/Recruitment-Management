/*var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var JobShema = new Schema({
    name: {
      type: String,
        required:true
    },
    nameCompany: {
        type:String,
        required: true
    },
    deadLine : {
        type: Date,
        default: null
    },
    quantity: {
        type: Number,
        default: 1
    },
    salary: {
        type: Number,
        default: true
    },
    exprence : {
        type: String
    },
    gender : {
        type: [
            { type: String, enum : ['Nam', 'Nữ','N/A']}
        ],
        default: ['N/A']
    },
    addressWork: {
        type: String,
        required: true
    },
    localzoneWork: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirement: {
        type: String
    },
    benefit: {
        type: String,
    },
    major: {
        type: String,
        enum: ['Bất Động Sản','Kinh Doanh', 'Kinh Te, Tai Chinh','Cong Nghe Thong Tin','N/A'],
        required: true
    },
    skill: {
        type: String
    },
    jobType : {
        type: String,
        enum: ['Full Time', 'Part Time']
    }
});
module.exports = mongoose.model('job', JobShema);*/

const Sequenlize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../../../database_sql');

const Job = db.define('Job', {
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    CompanyName: {
        type: DataTypes.STRING(1000)
    },
    JobName: {
        type: DataTypes.STRING
    },
    DeadLine: {
        type: DataTypes.DATEONLY
    },
    Quantity: {
        type: DataTypes.INTEGER
    },
    Salary: {
        type: DataTypes.FLOAT
    },
    Exprence: {
        type: DataTypes.STRING(5000)
    },
    Gender: {
        //kiểu Enum
        //type: DataTypes.ENUM
        type: DataTypes.ENUM(['Nam', 'Nữ'])
    },
    AddressWork: {
        type: DataTypes.STRING(5000)
    },
    CompanyId: {
        type: DataTypes.INTEGER
    },
    Locallocation: {
        type: DataTypes.STRING(5000)
    },
    Descriptions: {
        type: DataTypes.STRING(5000)
    },
    Requirement: {
        type: DataTypes.STRING(5000)
    },
    Benifit: {
        type: DataTypes.STRING(5000)
    },
    Major: {
        type: DataTypes.STRING(5000)
    },
    Skill: {
        type: DataTypes.STRING(5000)
    },
    JobType: {
        type: DataTypes.ENUM(['Full Time', 'Parttime'])
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Job;