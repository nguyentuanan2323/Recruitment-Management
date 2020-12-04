const candidateApply_controller = require("../app/controller/candidateApply.controller")
function post(req,res, next){
    candidateApply_controller.post(req,res);
}
function get(req,res, next){
    candidateApply_controller.get(req,res);
}
function deleted(req,res,next){
    candidateApply_controller.delete(req,res);
}
function put(req,res, next){
    candidateApply_controller.put(req,res);
}

function getByUserId(req, res, next){
    console.log(req);
    candidateApply_controller.getByUserId(req,res);
}

module.exports = candidateApply_controller;