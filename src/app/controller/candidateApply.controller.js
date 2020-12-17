
var candidateApply = require('../model/candidateapply');
const { model } = require('../model/user');
const user_controller = require("./user.controller")

class CandidateApplyController {
    /*index(req, res){
       res.render("layout/company.ejs")
    }*/
    //created
    post(req, res) {
        console.log("vao duoc post");
        if (req.isAuthenticated()) {
            //get information candidate
            console.log("Infomation")
            console.log(req.body.JobId);
            const candidateApplyAdding = candidateApply.build({
                UserId: `${req.user._id}`,
                JobId: req.body.JobId,
                Status: req.body.Status,
                Rating: req.body.Rating,
                Remark: req.body.Remark
            });
            console.log("candidateApplyAdding")
            console.log(candidateApplyAdding);
            candidateApply.findOrCreate({
                where: {
                    UserId: `${req.user._id}`,
                    JobId: req.body.JobId
                },
                defaults: {
                    UserId: `${req.user._id}`,
                    JobId: req.body.JobId,
                    Status: req.body.Status,
                    Rating: req.body.Rating,
                    Remark: req.body.Remark
                }
            }).then(function (result) {
                console.log("Abc");
                console.log(result[1])
                if (!result[1]) {
                    res.json({
                        result: "duplicate",
                        data: {},
                        message: `Your Apply this job already!`
                    })
                }
                else {
                    
                    candidateApply.create(candidateApplyAdding)
                    res.json({
                        result: "ok",
                        data: candidateApplyAdding,
                        message: "Apply successfully"
                    })
                }
            })
        }else{
            console.log("not login2");
            res.json({
                result: "erorr",
                data: null,
                message: "You are not login"
            })
        }



    }

    put(req, res) {

        console.log(req.body);
        candidateApply.update({
            UserId: req.body.UserId,
            JobId: req.body.JobId,
            Status: req.body.Status,
            Rating: req.body.Rating,
            Remark: req.body.Remark
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

    async get(req, res) {
        const candidateApplies = await candidateApply.findAll();
        res.json({
            result: 'ok',
            data: candidateApplies,
            count: candidateApplies.length
        })
    }

    async getByUserId(req, res) {

        console.log("Request aaaaaaaaaaa")

        //console.log(req.user._id);
        //console.table(req);
        //console.log(req.user);



        if (typeof req.user == "undefined") {

            res.json({
                result: 'erorr',
                data: { info: "You are not login" },
            })
        }
        else {
            const candidateApplies = await candidateApply.findAll({
                where: {
                    JobId: req.params.Id,
                    UserId: `${req.user._id}`
                }
            })
            console.log("candidateApplies")
            console.log(candidateApplies);

            if(candidateApplies.length == 0){
                res.json({
                    result: 'notapply',
                    data: candidateApplies,
                    count: candidateApplies.length
                })
            }else{
                res.json({
                    result: 'apply',
                    data: candidateApplies,
                    count: candidateApplies.length
                })
            }

        }
    }


    delete(req, res) {
        candidateApply.destroy({
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

    async getCandidateApply(req, res){
        const candidateAppliesUser = await candidateApply.findAll({
            attributes: ['UserId'],
            where: {
                JobId : req.params.Id
            }
        });
        const datauser = [];
        candidateAppliesUser.forEach(element => {
            datauser.push(element.dataValues.UserId);
        });
        
        console.log("dhfdfjksdjfl");
       
        console.log(datauser);
        
        const usserId = {
            "_id" : { "$in": datauser}
        }
       
        
        const employee_apply_promise = user_controller.getuser(usserId, null, null);
        employee_apply_promise.then(data_promise => {
            res.json({
                result: "ok",
                data: data_promise
            })
        })
        
        

    }

}



module.exports = new CandidateApplyController();