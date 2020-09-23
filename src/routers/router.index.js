const jobrouter = require('./job.router')

function route(app)
{
    app.use("/job",jobrouter)
    app.use('/Home',function renderHome(req, res){
        res.render("layout/home.ejs")
    })
}



module.exports = route;
