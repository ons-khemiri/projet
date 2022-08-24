const mongoose = require("mongoose") ;
const {Schema , model } = mongoose ;

const AdminSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
         },
    password : {
        type: String,
        required: true,
        } ,
    isAdmin : {
        type : Boolean},
        })

module.exports = Admin = model('admin', AdminSchema)