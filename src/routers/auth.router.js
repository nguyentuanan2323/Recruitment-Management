var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport){

    
    /* GET login page. */
    router.get('/Login', function(req, res) {
        // Display the Login page with any flash message, if any
     /*   res.render('account/login', { message: req.flash('message') });*/
        res.render('account/login', {layout:false});
    });

    /* Handle Login POST */
    router.post('/Login', passport.authenticate('login', {
        successRedirect: '/Home',
        failureRedirect: 'Login',
        failureFlash : true
    }));

    /* Handle Login POST */
    router.get('/Logout', function(req, res){
        req.logout();
        res.redirect('/');
      });

    /* GET Registration Page */
    router.get('/Signup', function(req, res){
        /*es.render('/account/signup',/!*{message: req.flash('message')}*!/);*/
        res.render('account/signup',{layout: false});
    });

    /* Handle Registration POST */
    router.post('/Signup', passport.authenticate('signup', {
        successRedirect: '/Home',
        failureRedirect: 'Signup',
        failureFlash : true
    }));

    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res){
        res.render('home', { user: req.user });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* GET userseson. */
    router.get('/Checkstatus', function(req, res) {
        console.log("Test");
        console.log(req._id);
        if(req.isAuthenticated()){
            res.json({
                user: req.user.username,
                test: req.user
                
            })
        }else if (req.isUnauthenticated()){
            res.json({
                user: "null"
            })
        }
        
    });

    return router;
}
