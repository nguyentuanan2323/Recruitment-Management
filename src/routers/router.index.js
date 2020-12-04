const jobrouter = require('./job.router')
const company = require('./company.router')
<<<<<<< HEAD
const candidateRouter = require('./candidateApply.router')
=======
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
const admin_router = require('./admin.router');


function route(app, passport)
{
    //routerpassport(passport);
    //Router passport
    var routerpassport = require('./auth.router')(passport);
    app.use("/job",jobrouter);
    app.use("/company",company);
    app.use('/Account', routerpassport);
    app.use('/Apply', candidateRouter);
    //router đến trang quản trị
    app.use("/RecuirementManagement",admin_router)

    //router đến home page
    app.use('/Home',function renderHome(req, res){
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })
<<<<<<< HEAD

    app.use('/company',function renderCompany(req, res){
        res.render("layout/company.ejs", {layout : "layout.ejs"})
    })

    app.use('/',function renderHome(req, res){
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })
   

=======
>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
}

module.exports = route;
