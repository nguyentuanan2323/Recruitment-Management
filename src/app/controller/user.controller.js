const { create } = require('../model/user');
const user = require('../model/user');
class UserController {
    async getuser(data) {
       
        try {
            var person = await user.find(data);
           
        } catch (error) {
            console.log(error);
        }
        console.log("person");
        console.log(person);
        return person;
    }

    /*index(req, res) {
        res.render("layout/profile.ejs",  {layout : "layout.ejs"})
    }*/

    //get
    async get(req, res) {
        const userprofile = await user.findAll();
        res.json({
            result: 'ok',
            data: userprofile,
            count: userprofile.length
        })
    }

    async put(req, res) {
       //console.log("Do somthing");
       //console.log(request.params);
       console.log("Id của user")
       console.log(req.user._id);
       
       console.log("Nội dung request profile")
      // console.log(req.body);
       if(req.user._id == req.body.id){
        const id = req.body.id;
        const updateObject = req.body;
        user.update({ _id:id }, { $set:updateObject })
          .exec()
          .then(() => {
            res.status(200).json({
              success: true,
              message: 'profile is updated',
              updateCourse: updateObject,
            });
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: 'Server error. Please try again.'
            });
          });
       }
       
    }

    async post(req, res) {
        console.log("Do somthing");
    }
    
    async getById(req,res) {
       console.log(req.param);
        const usserId = {
            "_id" : { "$in": req.params.Id}
        }

        try {
            var person = await user.findOne();
           
        } catch (error) {
            console.log(error);
        }
        console.log("person");
        console.log(person);
        res.json({
            result: "ok",
            data: person
        })
    }

    

    



}
module.exports = new UserController();