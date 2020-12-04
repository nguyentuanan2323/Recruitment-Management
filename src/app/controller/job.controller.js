var job = require('../model/job');
var mongoose = require("mongoose");
const Job = require('../model/job');


class JobController {
    index(req, res) {
        res.render("layout/jobs.ejs")
    }

    //get
    async get(req, res) {
        const jobs = await job.findAll();
        res.json({
            result: 'ok',
            data: jobs,
            count: jobs.length
        })
    }
    //get By Id
    
    async getById(req, res){
        console.log("fdsfjdsfhsdfdjsfhjdshfsdjhfsdjfhsdjkf")
        console.log(req.param.Id);
        const jobdetail = await job.findAll({
            where: {
                Id : req.params.Id
            }
        })
        res.json({
            result: 'ok',
            data: jobdetail,
            count: jobdetail.length
        })
    }
<<<<<<< HEAD
=======
    post(req, res) {
        const job_temp = {
            name: req.body.name
        };
        Job.find(job_temp).limit(1).exec((err, job_temps) =>{
            if(err){

            }else{
                if(job_temp.length > 0){

                }
                const newJob = new Job({
                    name: req.body.name,
                    nameCompany: req.body.nameCompany,
                    deadLine : req.body.deadLine,
                    quantity: req.body.quantity,
                    salary: req.body.salary,
                    exprence : req.body.exprence,
                    gender : req.body.gender,
                    addressWork: req.body.addressWork,
                    localzoneWork: req.body.localzoneWork,
                    description: req.body.description,
                    requirement: req.body.requirement,
                    benefit: req.body.benefit,
                    major: req.body.major,
                    skill: req.body.skill,
                    jobType : req.body.jobType
                });
                newJob.save((err, newjob) => {
                    if(err){
                        res.json({
                            result: "faild",
                            data: {},
                            message: `Error is:  ${err}`
                        });
                    }
                    else{
                        res.json({
                            result: 'ok',
                            data: newjob,
                            message: "Insert new job successfully"
                        });
                    }
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e

    post(req, res) {
        
        //get information job
        console.log("request body")
        console.log(req.body);
      
        job.create({
                Name: `${req.body.Name}`,
                CompanyName: req.body.CompanyName,
                DeadLine : `${req.body.DeadLine}`,
                Quantity: req.body.Quantity,
                Salary: req.body.Salary,
                Exprence : req.body.Exprence,
                Gender : req.body.Gender,
                AddressWork: req.body.AddressWork,
                LocalzoneWork: req.body.LocalzoneWork,
                Description: req.body.Description,
                CompanyId: req.body.CompanyId,
                Requirement: req.body.Requirement,
                Benefit: req.body.Benefit,
                Major: req.body.Major,
                Skill: req.body.Skill,
                JobType : req.body.JobType
        }).then(function (result){
            console.log("Abc");
            console.log(result)
            
             res.json({
                    data: result.dataValues
                   
                })
        })
    }
    put(req, res){
        console.log("sjsdfjsdfh")
        console.log(req.body);
        
        job.update({
            Name: `${req.body.Name}`,
                CompanyName: req.body.CompanyName,
                JobName: req.body.JobName,
                DeadLine : req.body.DeadLine,
                Quantity: req.body.Quantity,
                Salary: req.body.Salary,
                Exprence : req.body.Exprence,
                Gender : req.body.Gender,
                AddressWork: req.body.AddressWork,
                LocalzoneWork: req.body.LocalzoneWork,
                Description: req.body.Description,
                Requirement: req.body.Requirement,
                Benefit: req.body.Benefit,
                Major: req.body.Major,
                CompanyId: req.body.CompanyId,
                Skill: req.body.Skill,
                JobType : req.body.JobType
        },{
            where: {
                Id: `${req.body.Id}`
            }
        }).then(() => {
            res.json({
                result: "ok",
                message: `Update succesfully`
            })
        })
    }
    
    delete(req, res){
<<<<<<< HEAD
        Job.destroy({
            where: {
                Id: `${req.query.Id}`
            }
        }).then( () => {
            res.json({
                result: "ok",
                message: `Delete succesfully`
            })
        })
=======
        const job_delete = {
            _id: new mongoose.Types.ObjectId(`${req.body._id}`)
        }
        console.log(req.params._id);
        Job.findOneAndDelete({_id: mongoose.Types.ObjectId(req.body._id)}, (err) => {
           if(err){
               res.json({
                   result: "failed",
                   message: `Can not delete because error is ${err}`
               })
               return;
           }
           else {
               res.json({
                   result: "ok",
                   message: "Delete succeses fully"
               })
           }
        });

>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
    }
}

module.exports = new JobController();