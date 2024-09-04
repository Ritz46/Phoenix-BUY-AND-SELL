const mongoose = require ('mongoose')
const schema=mongoose.Schema;

const adminSchema = new schema({
    aname: {type:String , required:true},
    email: {type:String , required:true},
    password: {type:String , required:true},
    contactNumber: {type: String},
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports =   Admin;