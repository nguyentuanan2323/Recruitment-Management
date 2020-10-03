var LocalStrategy   = require('passport-local').Strategy;
var User = require('../app/model/user');
var bCrypt = require('bcrypt');

module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            console.log("dfsdfjsdlkjfdsk")
            console.log(req);
            findOrCreateUser = function(){
                console.log(username)
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {

                    console.log(user);
                    console.log(user);
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.fullname = req.param('fullname')
                        newUser.password = createHash(req.param('password'));
                        newUser.username = req.param('email');
                        newUser.isAdmin = false;

                        // save the user
                        newUser.save(function(err) {
                            console.log("save được")
                            if (err){
                                console.log('Error in Saving user: '+err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(2), null);
    }

}