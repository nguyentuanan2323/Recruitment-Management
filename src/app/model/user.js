var mongoose = require("mongoose");

module.exports = mongoose.model("User",
    {
                fullname: String,
                username: String,
                password: String,
                gender: String,
                age:Number,
                education: String,
                curriculumVitae: String,
                certificate: String,
                exprence: String,
                project: String,
                introduce: String,
                isAdmin: Boolean,
            }
)