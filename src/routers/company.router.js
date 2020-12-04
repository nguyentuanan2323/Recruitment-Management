const express = require('express');
const router = express.Router();
const companyService = require('../webservice/company.service');
<<<<<<< HEAD
const company = require('../app/controller/company.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
   companyService.get(req,res);
=======
const company = require('../app/controller/job.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
    //companyService.get
    //to be Implimement
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
}))
router.use('/post', ((req, res) => {
   companyService.post(req,res);
}));
router.use('/put', ((req, res) => {
<<<<<<< HEAD
   companyService.put(req,res);
}));
router.use("/delete", ((req,res) =>{
    companyService.delete(req,res)
}))

router.use('/getById/:Id', (req, res) => {
   console.log("vao get")
   companyService.getById(req,res);
})
=======
    //companyService.put
    //to be Implimement
}));
router.use("/delete", ((req,res) =>{
    //to be Implimement
}))
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
router.use('/',company.index);

module.exports = router;
