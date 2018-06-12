/*
**  Module: Config
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This is where we put the development keys. In keys.js ... it will sense the 
**            the environment and select this file for keys or for prod, fetch it from prod
**            setup. 
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/11/2018       Jit      Setting up dev environment keys. Don't commit this. 
*/
module.exports = {
    googleClientID: "851068648862-kqnouda3of97voca9etotivbvkiqt70n.apps.googleusercontent.com",
    googleClientSecret: "TEXP7UhgM2UJGPzoQdOZXyoj",
    mongoURI: "mongodb://babula:Ranjan10@ds255320.mlab.com:55320/baanda-emaily-dev",
    cookieKey: "thisIsAnySequenceOfKeyThatCannotBeGuessed"
}