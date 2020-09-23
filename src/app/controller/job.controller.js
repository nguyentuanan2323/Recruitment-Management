
class JobController {
    index(req, res){
        res.render("layout/jobs.ejs")
    }
}
module.exports = new JobController();