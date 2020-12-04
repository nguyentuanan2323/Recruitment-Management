const company_controller = require("../app/controller/company.controller")
function post(req,res, next){
    company_controller.post(req,res);
}
<<<<<<< HEAD
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

=======
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
module.exports = company_controller;