const mongoose=require('mongoose');

const schema=mongoose.Schema;

const ProductSchema=new schema(
    {
        title:{type:String , required:true},
        description:{type:String,required:true},
        expectedPrice:{type:Number , required:true},
        oldness:{type:String , required:true},
        owner:{type:String , required:true},
        imgs:[String],
        tags:{type:String},
        address:{type:String}
    }
    , 
    { timestamps: true }
)

module.exports = mongoose.model("Product",ProductSchema);