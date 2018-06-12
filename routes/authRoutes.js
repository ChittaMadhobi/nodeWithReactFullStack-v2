/*
**  Module: Root server
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This would serve as main backend server
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/06/2018       Jit      Refactored to include only authentication routings
**  
*/
const passport = require ('passport');

/* module.exports = function (app) {
  // This is the first invoke into google oAuth setup. This returns a code with the callback
  // /auth/google/callback/code=....the code...
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      scope: ['profile', 'email'],
    })
  );
  // This is the second router in the flow. Passport recognizes the second call and
  // augments the code to call back to google for profile and email we asked for.
  // Google strategy recognize the 'google' parameter and tells passport what to do.
  app.get ('/auth/google/callback', passport.authenticate ('google'));
}; */

// Another way of writing  the above export
module.exports = app => {
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      scope: ['profile', 'email'],
    })
  );
  //
  app.get ('/auth/google/callback', passport.authenticate ('google'));
  // To logout
  app.get('/api/logout', (req, res) => {
    req.logout();    // passport send few variables in 'req' here. One if logout that disables the cookie.
    res.send(req.user); // This should return null of undefineds in browser.
});

  // This is to test that the 'req' has the user data at the end of the auth flow. 
  app.get('/api/current_user', function(req, res){
   res.send(req.user);    // Just sending back the user data  
   // res.send(req.session);
  });

};


