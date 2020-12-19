
var company = require('../model/company');
const { create } = require('../model/job');

class CompanyController {
    index(req, res) {
        res.render("layout/company.ejs")
    }
    //created
    post(req, res) {

        //get information company
        console.log("Infomation")
        console.log(req.body);
        const compnanyAdding = company.build({
            Name: req.body.Name,
            JobId: req.body.JobId,
            Introduce: req.body.Introduce,
            ProductBusiness: req.body.ProductBusiness,
            Service: req.body.Service,
            ImagesLink: req.body.ImagesLink,
            VideoLink: req.body.VideoLink,
            Address: req.body.VideoLink
        });
        console.log(compnanyAdding);
        company.findOrCreate({
            where: {
                Name: req.body.Name
            },
            defaults: {
                Name: req.body.Name,
                JobId: req.body.JobId,
                Introduce: req.body.Introduce,
                ProductBusiness: req.body.ProductBusiness,
                Service: req.body.Service,
                ImagesLink: req.body.ImagesLink,
                LogoLink: req.body.LogoLink,
                VideoLink: req.body.VideoLink,
                Address: req.body.VideoLink,
                PolicyBenifit: req.body.PolicyBenifit
            }
        }).then(function (result) {
            console.log("Abc");
            console.log(result[1])
            if (!result[1]) {
                res.json({
                    result: "faild",
                    data: {},
                    message: `Name Company is exits`
                })
            }
            else {
                console.log(compnanyAdding.getDataValue('Name'))
                //company.create(compnanyAdding)
                res.json({
                    result: "ok",
                    data: compnanyAdding,
                    message: "Insert new company successfully"
                })
            }
        })


    }

    put(req, res) {
        console.log("djksldfjksdjfksdfjdslkfjl")
        console.log(req.body);
        company.update({
            Name: req.body.Name,
            JobId: req.body.JobId,
            Introduce: req.body.Introduce,
            LogoLink: req.body.LogoLink,
            ProductBusiness: req.body.ProductBusiness,
            Service: req.body.Service,
            PolicyBenifit: req.body.PolicyBenifit,
            ImagesLink: req.body.ImagesLink,
            VideoLink: req.body.VideoLink,
            Address: req.body.Address,
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
        const companies = await company.findAll();
        res.json({
            result: 'ok',
            data: companies,
            count: companies.length
        })
    }

    async getById(req, res) {

        console.log(req.param.Id);
        const companydetail = await company.findAll({
            where: {
                Id: req.params.Id
            }
        })
        res.json({
            result: 'ok',
            data: companydetail,
            count: companydetail.length
        })
    }


    delete(req, res) {
        company.destroy({
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



module.exports = new CompanyController();