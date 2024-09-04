const Product = require("../models/Product");

const mongoose = require("mongoose");
const { redisClient } = require("../utils/redis.utis");
const cloudinary = require("cloudinary").v2;
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});


exports.getAllProducts = async (req, res) => {
  try {
    const productArray = await Product.find({});
    res.json({ products: productArray });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSearchResults = async (req, res) => {
  try {
    const searchmethod = req.query.method;
    const searchString = req.query.searchString;
    let foundProducts;
    if (searchmethod == "tags") {
      foundProducts = await Product.find({ tags: searchString });
    } else {
      foundProducts = await Product.find({
        title: new RegExp(searchString, "i"),
      });
    }
    res.status(201).json({ foundProducts });
  } catch (error) {
    console.log(error);
  }
};


exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.query.productId;
    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.query.id;
  console.log(productId);

  try {
    // Find and delete the user based on the user ID
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(201).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.postProduct = async (req, res) => {
  try {
    // const productDetails = req.body;
    const { title, description, age, price, owner, address, tags } = req.body;
    let images=[]
    for(const file of req.files){
      let result=await cloudinary.uploader.upload(file.path)
      images.push(result.url);
    }
    // const images = req.files.map(
    //   (file) => "http://localhost:8000/images/" + file.filename
    // );

    let newProduct = new Product({
      title: title,
      expectedPrice: price,
      oldness: age,
      description: description,
      owner: owner,
      imgs: images,
      address: address,
      tags: tags,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product Added Successfully !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
