const mongoose = require("mongoose");

const schema = mongoose.Schema;

const offerSchema = new schema({
  offerer: { type: String, required: true },
  productName: { type: String, required: true },
  productid: { type: String, required: true },
  owner: { type: String, required: true },
  amount: { type: Number, required: true },
  offerStatus: { type: Number, default: 0 },
}, { timestamps: true });

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;