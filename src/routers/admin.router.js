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

<<<<<<< HEAD
        /*if(req.isAuthenticated()){*/
            res.render("adminLayout/admin-job/bestjob.ejs", {layout : "adminLayout/admin.index.ejs"})
       /* }else {
            res.redirect("/Account/Login");
        }*/
=======
        if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/bestjob.ejs", {layout : "adminLayout/admin.index.ejs"})
        }else {
            res.redirect("/Account/Login");
        }
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e

    })

    router.use('/highsalary-job',function renderHome(req, res){
        if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
        }else {
           res.redirect("/Account/Login");
        }

    })
<<<<<<< HEAD
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
=======
    router.use('/',function renderHome(req, res){
        if(req.isAuthenticated()){
            res.render("adminLayout/admin-job/highsalary.ejs", {layout : "adminLayout/admin.index.ejs"})
        }else {
            res.redirect("/Account/Login");
        }
    })
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
module.exports = router;
