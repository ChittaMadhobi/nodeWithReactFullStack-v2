/*
**  Module: Config
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This is for fetching production environment variables 
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/11/2018       Jit      Accessing up prod environment keys 
*/
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}    

