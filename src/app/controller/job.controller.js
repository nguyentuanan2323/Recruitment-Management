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

    async getById(req, res) {
        console.log("fdsfjdsfhsdfdjsfhjdshfsdjhfsdjfhsdjkf")
        console.log(req.param.Id);
        const jobdetail = await job.findAll({
            where: {
                Id: req.params.Id
            }
        })
        res.json({
            result: 'ok',
            data: jobdetail,
            count: jobdetail.length
        })
    }

    post(req, res) {

        //get information job
        console.log("request body")
        console.log(req.body);

        job.create({
            JobName: `${req.body.JobName}`,
            CompanyName: req.body.CompanyName,
            DeadLine: `${req.body.DeadLine}`,
            Quantity: req.body.Quantity,
            Salary: req.body.Salary,
            Exprence: req.body.Exprence,
            Gender: req.body.Gender,
            AddressWork: req.body.AddressWork,
            Locallocation: req.body.Locallocation,
            Descriptions: req.body.Descriptions,
            CompanyId: req.body.CompanyId,
            Requirement: req.body.Requirement,
            Benifit: req.body.Benifit,
            Major: req.body.Major,
            Skill: req.body.Skill,
            JobType: req.body.JobType
        }).then(function (result) {
            console.log("Abc");
            console.log(result)

            res.json({
                data: result.dataValues

            })
        })
    }
    put(req, res) {
        console.log("sjsdfjsdfh")
        console.log(req.body);

        job.update({
            Name: `${req.body.Name}`,
            CompanyName: req.body.CompanyName,
            JobName: req.body.JobName,
            DeadLine: req.body.DeadLine,
            Quantity: req.body.Quantity,
            Salary: req.body.Salary,
            Exprence: req.body.Exprence,
            Gender: req.body.Gender,
            AddressWork: req.body.AddressWork,
            Locallocation: req.body.Locallocation,
            Descriptions: req.body.Descriptions,
            Requirement: req.body.Requirement,
            Benefit: req.body.Benefit,
            Major: req.body.Major,
            CompanyId: req.body.CompanyId,
            Skill: req.body.Skill,
            JobType: req.body.JobType
        }, {
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

    delete(req, res) {
        Job.destroy({
            where: {
                Id: `${req.query.Id}`
            }
        }).then(() => {
            res.json({
                result: "ok",
                message: `Delete succesfully`
            })
        })
    }
}

module.exports = new JobController();