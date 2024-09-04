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
  
  test("GET /api/getAllOffers", async ()=>{
    const response = await request(app).get("/getAllOffers")

    expect(typeof response.body.Offers).toBe('object');
  },50000);
  
//   test("GET /api/getSingleOffer", async ()=>{
//     const response = await request(app).get("/getSingleOffer").send({
//         id: "65662b471b8a5ee627541382"
//     })

//     expect(typeof response.body.Offers).toBe('object');
//   },50000);
  
})
  
