const company_controller = require("../app/controller/company.controller")
function post(req,res, next){
    company_controller.post(req,res);
}
function get(req,res, next){
    company_controller.get(req,res);
}
function deleted(req,res,next){
    company_controller.delete(req,res);
}
function put(req,res, next){
    company_controller.put(req,res);
}

function getById(req, res, next){
    console.log(req);
    company_controller.getById(req,res);
}

module.exports = company_controller;