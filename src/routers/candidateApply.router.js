const express = require('express');
const router = express.Router();
const candidateApply_Service = require('../webservice/candidate.service');



router.use('/get', ((req, res) => {
    candidateApply_Service.get(req, res);
}))
router.use('/post', ((req, res) => {

    candidateApply_Service.post(req, res);


}));
router.use('/put', ((req, res) => {
    candidateApply_Service.put(req, res);
}));
router.use("/delete", ((req, res) => {
    candidateApply_Service.delete(req, res)
}))

router.use('/getById/:Id', (req, res) => {
    candidateApply_Service.getByUserId(req, res);
})


module.exports = router;
