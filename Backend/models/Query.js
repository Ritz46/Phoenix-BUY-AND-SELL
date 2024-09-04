const mongoose = require ('mongoose')
const schema=mongoose.Schema;

const querySchema = new schema({
    querrier: String,
    query: String
}, { timestamps: true });

const Query = mongoose.model("Query", querySchema);

module.exports =   Query;