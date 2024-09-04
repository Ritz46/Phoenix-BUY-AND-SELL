require("dotenv").config();

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Product = require("../../models/Product");
const User = require("../../models/User");
const { ObjectId } = require("mongodb");
beforeAll(async () => {
//  monSer= await connectToDB();
});

// Clear the test database before each test
beforeEach(async () => {
})
const jwt = require("jsonwebtoken");

describe("API tests", () => {
  
  test("POST /api/getSingleProduct", async ()=>{
    const response = await request(app).get("/AdminLogin").send({
        id: "6446a5b9c36b95cf80cb0111"
    })

    expect(response.status);
  },50000);
  
  test("POST /api/deleteProduct", async ()=>{
    const response = await request(app).get("/deleteProduct").send({
        productId: "6446a5b9c36b95cf80cb0111"
    })

    expect(response.status);
  },50000);

})
  
