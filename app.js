/*
**  Module: Root server
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This would serve as main backend server
**   
**  Special Direction: Mention in package.json the following
**                     node version  8.8.1
**                     npm  version  5.6.0
**                     start script  app.js
**               
**  Rivision History:
**
**  Date           Author     Description
**  06/06/2018       Jit      Setup and initiate #1 & #2 in readme.md
**  06/06/2018       Jit      Google oAuth based  authentication (check #3 in readme.md) 
**  
*/
//const express = require('express');
const express           = require('express');
const mongoose          = require('mongoose');
const cookieSession     = require('cookie-session');
const passport          = require('passport');

const keys              = require('./config/keys');

// Include mongoose Models. This has to happen before the  passport is called that 
// uses the User model. 
require('./models/User');

require('./services/passport');  // Since this is not returning any value, don't need a varaible to hold it.
const authRoutes = require('./routes/authRoutes');

//============================================================================
// Connect to DB (in MLab)
mongoose.connect(keys.mongoURI);
// Server setup & configuration
const app = express();
// Inform passport, in express, about cookie session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,   // 30 days in miliseconds 
        keys: [keys.cookieKey]    // This is for encrypting when sent to fronend
    })
);
// Let's tell passport to use cookies to authenticate & manage session
app.use(passport.initialize());
app.use(passport.session());
//============================================================================
// ROUTER SECTION 
// -----------------------------------------------test from browser
app.get('/', (req, res) => {
    res.send("Got to the app.js");
});

// Route authentication function. It routes get:/auth/google then get:/auth/google/callback
// To get profile related information. 
authRoutes(app); 
// ============================================================================
// Server CONFIG AND START-LISTEN
const PORT = process.env.PORT || 5000;
const IP   = process.env.IP; // || localhost;  //Careful to change localhost while porting to Heroku

app.listen(PORT, IP, function(){
    console.log("Server started at <IP:PORT> as <" + IP + ":" + PORT + "> ");
});