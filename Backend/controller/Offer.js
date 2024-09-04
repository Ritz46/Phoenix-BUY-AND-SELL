const Offer = require("../models/Offer");
const mongoose = require("mongoose");

exports.getAllOffers = async (req, res) => {
  try {
    const OfferArray = await Offer.find({});
    res.json({ Offers: OfferArray });
  } catch (error) {
    console.log(error);
  }
};

exports.updateOffers = async (req, res) => {
  try {
    let pID = req.query.pid;
    let oID = req.query.oid;
    // console.log(pID);
    // console.log(oID);
    let result1 = await Offer.updateOne({ _id: oID }, { offerStatus: 1 });
    let results2 = await Offer.updateMany(
      { productid: pID, offerStatus: 0 },
      { offerStatus: -1 }
    );
    // console.log(result1);
    // console.log(results2);
    res.status(201).json({message:'Offers Updated Successfully !'})
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleOffer = async (req, res) => {
  try {
    const id = req.query.OfferId;
    const Offer = await Offer.find({ _id: id });
    res.json({ Offer });
  } catch (error) {
    console.log(error);
  }
};

exports.postOffer = async (req, res) => {
  try {
    const OfferDetails = req.body;
    let newOffer = new Offer({
      offerer: OfferDetails.offerer,
      productName: OfferDetails.productName,
      productid: OfferDetails.productid,
      owner: OfferDetails.owner,
      amount: OfferDetails.amount,
      offerStatus: OfferDetails.offerStatus,
    });
    await newOffer.save();
    res.status(201).json({ message: "Offer Added Successfully !" });
  } catch (error) {
    console.log(error);
  }
};
