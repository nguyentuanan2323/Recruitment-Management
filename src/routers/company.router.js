const express = require('express');
const router = express.Router();
const companyService = require('../webservice/company.service');
const company = require('../app/controller/job.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
    //companyService.get
    //to be Implimement
}))
router.use('/post', ((req, res) => {
   companyService.post(req,res);
}));
router.use('/put', ((req, res) => {
    //companyService.put
    //to be Implimement
}));
router.use("/delete", ((req,res) =>{
    //to be Implimement
}))
router.use('/',company.index);

module.exports = router;
