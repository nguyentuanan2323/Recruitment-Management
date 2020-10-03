var mongoose = require('mongoose')
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
module.exports = mongoose.model('job', JobShema);