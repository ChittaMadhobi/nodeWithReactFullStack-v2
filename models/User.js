/*
**  Module: Root server
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This would serve as User Model 
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/10/2018       Jit      Initiated the model class for User autentication
**  
*/

const mongoose      = require('mongoose');
//const Schema        = mongoose.Schema;
const { Schema }    = mongoose; // This is same as above and is called destructring 

// Base User Schema is ...
const userSchema = new Schema ({
    googleId:   String
}); 

// The model created by mongoose, to be used in js, is
mongoose.model('users', userSchema);

//module.exports = users;
