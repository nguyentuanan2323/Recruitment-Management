const express = require('express');
const router = express.Router();
const job = require('../app/controller/job.controller');

router.use('/job',job.index);
router.use('/',job.index);

module.exports = router;
