const jobrouter = require('./job.router')
const company = require('./company.router')
const admin_router = require('./admin.router');


function route(app, passport)
{
    //routerpassport(passport);
    //Router passport
    var routerpassport = require('./auth.router')(passport);
    app.use("/job",jobrouter);
    app.use("/company",company);
    app.use('/Account', routerpassport);
    //router đến trang quản trị
    app.use("/RecuirementManagement",admin_router)

    //router đến home page
    app.use('/Home',function renderHome(req, res){
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })

    app.use('/company',function renderCompany(req, res){
        res.render("layout/company.ejs", {layout : "layout.ejs"})
    })
   

}

module.exports = route;
