/*
**  Module: Root server
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This would serve as main backend server
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/07/2018       Jit      Keeping  passport and google strategy directives
**  
*/
const passport          = require('passport');
const GoogleStrategy    = require('passport-google-oauth20').Strategy; // only the stratgy part
const mongoose          = require('mongoose');
const keys              = require('../config/keys');

//require('../models/User');  This is used in app.js before the passport.js is required. 

const User  =  mongoose.model('users');

//passport.serializeUser((user, done) => {})
// in this case, user is the mongo's user's _id
passport.serializeUser(function (user, done){
    done(null, user.id);
});

//passport.deserializeUser(() => {})
passport.deserializeUser(function(id, done){
    //User.findById(id).then(user) => {
    //   done(null, user);                // This is the same as below
    //});
    User.findById(id).then(function(user){
        done(null, user);
    });
});


// passport.use is asking passport to 'passport made  aware of the google strategy'
// Keys are from configuration  config/keys.js.
// GoogleStrategy takes in step1. keys step 2. Return accessToken, 3. Has 4 attributes
// accessToken is sent back, . 
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',     //This is where 2nd call back to google happens after first call to goolge 
    proxy:  true
    }, (accessToken, refreshToken, profile, done) => {
        /* console.log('accessToken : ' + accessToken);
        console.log('refreshTonen: ' + refreshToken);
        console.log('profile : ' + JSON.stringify(profile)); */
        // Create model instance and save it to database.
        User.findOne({ googleId:  profile.id})  // .then is a promise
            .then((existingUser) => {     //existingUser is the return value of the query
                if(existingUser) {
                    // We already have the user
                    done(null, existingUser);   // null mean 'no error' and 2nd parm is the user profile.
                } else {
                    new User({ googleId:  profile.id}).save()
                    .then(user => done(null, user)); // user is the saved value in the DB
                }
            });
    })
);   // Setting up the google strategy

