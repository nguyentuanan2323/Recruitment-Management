const company_controller = require("../app/controller/company.controller")
function post(req,res, next){
    company_controller.post(req,res);
}
module.exports = company_controller;