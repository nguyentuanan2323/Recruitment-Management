const express = require('express');
const router = express.Router();
const userService = require('../webservice/user.service');
const userControll = require('../app/controller/company.controller');
const usersf = require('../app/controller/user.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
    userService.get(req,res);
}))
router.use('/post', ((req, res) => {
    userService.post(req,res);
}));
router.use('/put', ((req, res) => {
    userService.put(req,res);
}));
// router.use('/getById/:Id', ((req, res) => {
//     console.log("vao get vffm   hahahha")
//     userService.getById(req,res);
    
// }));

router.use('/getById/:Id', (req, res) => {
    console.log("vao get vao get vffm   hahahha")
    userService.getById(req,res);

 })





module.exports = router;
