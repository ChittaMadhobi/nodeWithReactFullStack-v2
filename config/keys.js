/*
**  Module: Config
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This figures  out the environment (prod, QA, Dev etc.)
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/11/2018       Jit      Setting up the preliminary logic
*/

if (process.env.NODE_ENV === undefined) {
    console.log('process.env.NODE_ENV is undefined if-else flow in keys.js');
    module.exports = require('./dev');
} else if (process.env.NODE_ENV === 'production'){
    console.log('process.env.NODE_ENV === production flow: ' + process.env.NODE_ENV );
    module.exports = require('./prod');
} else {
    console.log('process.env.NODE_ENV is neither undefined nor production : ' + process.env.NODE_ENV);
    module.exports = require('./dev');
}


//DEV
/* module.exports = {
    googleClientID: "851068648862-kqnouda3of97voca9etotivbvkiqt70n.apps.googleusercontent.com",
    googleClientSecret: "TEXP7UhgM2UJGPzoQdOZXyoj",
    mongoURI: "mongodb://babula:Ranjan10@ds255320.mlab.com:55320/baanda-emaily-dev",
    cookieKey: "thisIsAnySequenceOfKeyThatCannotBeGuessed"
}  */
// PROD
/* module.exports = {
    googleClientID: "675422923010-clfhs5q82t9mpqo1oe0gv6o9ksta10in.apps.googleusercontent.com",
    googleClientSecret: "ZvimHgkwBNe6fc4eybRuWh0A",
    mongoURI: "mongodb://babula:Ranjan10@ds255320.mlab.com:55320/baanda-emaily-prod",
    cookieKey: "thisIsAnySequenceOfKeyThatCannotBeGuessed"
} */