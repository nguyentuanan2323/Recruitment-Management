const jobrouter = require('./job.router')
const admin_router = require('./admin.router');


function route(app, passport)
{
    //routerpassport(passport);
    //Router passport
    var routerpassport = require('./auth.router')(passport);
    app.use("/job",jobrouter)
    app.use('/Account', routerpassport);
    //router đến trang quản trị
    app.use("/RecuirementManagement",admin_router)

    //router đến home page
    app.use('/Home',function renderHome(req, res){
        console.log("aaaaaa");
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })



}

module.exports = route;
