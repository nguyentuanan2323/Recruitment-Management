var Job = require('../model/job');
var mongoose = require("mongoose");


class JobController {
    index(req, res) {
        res.render("layout/jobs.ejs")
    }

    //get
    get(req, res) {
        Job.find().exec((err, jobs) => {
            if (err) {
                res.json({
                    result: "fail",
                    data: [],
                    message: `Error is : ${err}`
                })
            } else {
                res.json({
                    result: "ok",
                    data: jobs,
                    count: jobs.length,
                    message: `Query list of foods successfully`
                })
            }
        })
    }
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

                })
            }
        });
    }
    put(req, res){
        let condition = {};
        const job_editting = {
            _id : `${req.body._id}`
        }
        console.log(job_editting._id);

        Job.find({_id:job_editting._id}).limit(1).exec((err, job_editting) => {

            if(err){
                console.log(err)
                res.json({
                    result: "fail",
                    data : {},
                    message: `Error is ${err}`
                })
            }else{
                if(job_editting.length > 0){
                    let new_value = {
                        nameCompany: req.body.nameCompany
                    };


                    Job.findOneAndUpdate(condition, {$set: new_value}, null, (err, updatedJob) =>{

                        if(err){

                            res.json ({
                                result: 'fail',
                                data: {},
                                message: `Update fail ${err}`
                            })
                        }else {
                            res.json({
                                result: 'ok',
                                data: updatedJob,
                                count: updatedJob.length,
                                message: 'Update data successflully'
                            })
                        }
                    })
                }else {
                    res.json ({
                        result: "fail",
                        data : {},
                        message: `Error is ${err}`
                    })
                }
            }
        })
    }
    delete(req, res){
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

    }
}

module.exports = new JobController();