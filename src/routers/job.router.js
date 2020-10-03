const express = require('express');
const router = express.Router();
const jobService = require('../webservice/job.service');
const job = require('.././app/controller/job.controller');

/*router.use('/job',job.index);*/
router.use('/get', ((req, res) => {
    jobService.get(req,res);
}))
router.use('/post', ((req, res) => {
    jobService.post(req,res);
}));
router.use('/put', ((req, res) => {
    jobService.put(req,res);
}));
router.use("/delete", ((req,res) =>{
    console.log("jfklfhlksdjfklsdjfl")
    jobService.delete(req,res);
}))
router.use('/',job.index);

module.exports = router;
