
var candidateApply = require('../model/candidateapply');


class CandidateApplyController {
    /*index(req, res){
       res.render("layout/company.ejs")
    }*/
    //created
    post(req, res){

        //get information company
        console.log("Infomation")
        console.log(req.body);
        const andidateApplyAdding = candidateApply.build({
            UserId: req.body.UserId,
            JobId: req.body.JobId,
            Status: req.body.Status,
            Rating: req.body.Rating,
            Remark: req.body.Remark
        });

        console.log(andidateApplyAdding);
        candidateApply.findOrCreate({
            where: {
                UserId: req.body.Name,
                JobId: req.body.JobId
            },
            defaults: {
                UserId: req.body.UserId,
                JobId: req.body.JobId,
                Status: req.body.Status,
                Rating: req.body.Rating,
                Remark: req.body.Remark
            }
        }).then(function (result){
            console.log("Abc");
            console.log(result[1])
            if(!result[1]){
                res.json({
                    result: "faild",
                        data: {},
                    message: `Your Apply this job already!`
                })
            }
            else {
                console.log(andidateApplyAdding.getDataValue('Name'))
                candidateApply.create(andidateApplyAdding)
                res.json({
                    result: "ok",
                    data: andidateApplyAdding,
                    message: "Apply successfully"
                })
            }
        })
       
           
    }

    put(req, res){
     
        console.log(req.body);
        candidateApply.update({
            UserId: req.body.UserId,
            JobId: req.body.JobId,
            Status: req.body.Status,
            Rating: req.body.Rating,
            Remark: req.body.Remark
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

    async get(req, res) {
        const candidateApplies = await candidateApply.findAll();
        res.json({
            result: 'ok',
            data: candidateApplies,
            count: candidateApplies.length
        })
    }

    async getByUserId(req, res){
       
        console.log(req.param.Id);
        const candidateApply = await candidateApplies.findAll({
            where: {
                UserId : req.params.UserId
            }
        })
        res.json({
            result: 'ok',
            data: candidateApply,
            count: candidateApply.length
        })
    }


    delete(req, res){
        candidateApply.destroy({
           where: {
               Id: `${req.query.Id}`
           }
       }).then( () => {
           res.json({
               result: "ok",
               message: `Delete succesfully`
           })
       })
    }
}



module.exports = new CandidateApplyController();