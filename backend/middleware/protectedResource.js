const jwt = require("jsonwebtoken");                               //importing jsonwebtoken
const {JWT_SECRET} = require('../config');                         //importing JWT_SECRET we created in config

const mongoose = require("mongoose");                              //importing mongoose
const UserModel = mongoose.model("UserModel");                     //importing UserModel

module.exports = (req, res, next)=>{
    const {authorization} = req.headers;
    
    if(!authorization){
        return res.status(401).json({error: "User not logged in"});
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (error, payload)=>{
        if(error){
            return res.status(401).json({error: "User not logged in"});
        }
        const {_id} = payload;
        UserModel.findById(_id)
        .then((dbUser)=>{
            req.user = dbUser;
            next();                                     //goes to the next middleware or goes to the REST API
        })
    });
}

