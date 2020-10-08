
var company = require('../model/company');

class CompanyController {
    index(req, res){
        //render something to client
    }
    //created
    post(req, res){
        //get information company
        console.log("HAHHAHHAH")
        console.log(req.body);
        const compnanyAdding = company.build({
            Name: req.body.Name,
            JobId: req.body.JobId,
            Introduce: req.body.Introduce,
            ProductBusiness: req.body.ProductBusiness,
            Service: req.body.Service,
            ImagesLink: req.body.ImagesLink,
            VideoLink: req.body.VideoLink
        });
        company.findOrCreate({
            where: {
                Name: compnanyAdding.getDataValue('Name')
            }
        }).then(function (result){
            if(!result[1]){
                res.json({
                    result: "faild",
                        data: {},
                    message: `Name Company is exits`
                })
            }
            else {
                console.log(compnanyAdding.getDataValue('Name'))
                company.create(compnanyAdding)
                res.json({
                    result: "ok",
                    data: compnanyAdding,
                    message: "Insert new company successfully"
                })
            }
        })
    }


}



module.exports = new CompanyController();