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
  
  test("GET /api/getAllQuery", async ()=>{
    const response = await request(app).get("/getAllQuery")

    expect(response.status);
  },50000);
  
  test("GET /api/postQuery", async ()=>{
    const response = await request(app).get("/postQwuery").send({
        queryStatement: "query1",
        Querrier: "Test"
    })

    expect(response.status);
  },50000);
  
})
  
