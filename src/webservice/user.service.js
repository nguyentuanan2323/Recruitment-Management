var user_controller = require('../app/controller/user.controller');

    function get(req, res, next) {
        user_controller.get(req,res);
    }

    function index(req, res, next) {
        user_controller.index(req,res);
    }

    function put(req, res, next){
        user_controller.put(req,res);
    }
    
    function post(req, res, next){
        user_controller.post(req,res)
    }
    function getById(req, res, next){
       
      
       user_controller.getById(req,res);
    }

    

module.exports = user_controller;



