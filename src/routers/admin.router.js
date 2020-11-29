const express = require('express');
const router = express.Router();

    router.use('/hot-job',function renderHome(req, res){
       // if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/hotjob.ejs", {layout : "adminLayout/admin.index.ejs"})
      //  }else {
           res.redirect("/Account/Login");
       // }

    })

    router.use('/best-job',function renderHome(req, res){

        /*if(req.isAuthenticated()){*/
            res.render("adminLayout/admin-job/bestjob.ejs", {layout : "adminLayout/admin.index.ejs"})
       /* }else {
            res.redirect("/Account/Login");
        }*/

    })

    router.use('/highsalary-job',function renderHome(req, res){
        if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
        }else {
           res.redirect("/Account/Login");
        }

    })
    router.use('/company',function renderHome(req, res){
        /*if(req.isAuthenticated()){*/
            res.render("adminLayout/admin-company/company.ejs", {layout : "adminLayout/admin.index.ejs"})
      /*  }else {
            res.redirect("/Account/Login");
        }*/

    })

    router.use('/',function renderHome(req, res){
        if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
        }else {
            res.redirect("/Account/Login");
        }
    })
module.exports = router;
