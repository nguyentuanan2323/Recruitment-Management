const express = require('express');
const router = express.Router();
const companyService = require('../webservice/company.service');
const company = require('../app/controller/company.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
   companyService.get(req,res);
}))
router.use('/post', ((req, res) => {
   companyService.post(req,res);
}));
router.use('/put', ((req, res) => {
   companyService.put(req,res);
}));
router.use("/delete", ((req,res) =>{
    companyService.delete(req,res)
}))

router.use('/getById/:Id', (req, res) => {
   console.log("vao get")
   companyService.getById(req,res);
})
router.use('/',company.index);

module.exports = router;
