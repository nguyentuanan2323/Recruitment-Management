const express = require('express');
const router = express.Router();

    router.use('/hot-job',function renderHome(req, res){
        res.render("adminLayout/admin-job/hotjob.ejs", {layout : "adminLayout/admin.index.ejs"})
    })

    router.use('/best-job',function renderHome(req, res){
        res.render("adminLayout/admin-job/bestjob.ejs", {layout : "adminLayout/admin.index.ejs"})
    })

    router.use('/highsalary-job',function renderHome(req, res){
        res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
    })
    router.use('/',function renderHome(req, res){
        res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
    })

module.exports = router;
