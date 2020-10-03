var job_controller = require('../app/controller/job.controller');
    function get(req, res, next) {
        job_controller.get(req,res);

    }
    function put(req, res, next){
        job_controller.put(req,res);
    }
    function deleted(req, res,next) {

        job_controller.delete(req,res);
    }
    function post(req, res, next){
        job_controller.post(req,res)
    }
module.exports = job_controller;



