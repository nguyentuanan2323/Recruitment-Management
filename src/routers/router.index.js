const jobrouter = require('./job.router')

function route(app)
{
    app.use("/job",jobrouter)

    app.use('/Home',function renderHome(req, res){
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })

    app.use('/',function renderHome(req, res){
        res.render("layout/home.ejs", {layout : "layout.ejs"})
    })
}

module.exports = route;
