require("dotenv").config();

const request = require("supertest");
// const { generateToken, generateRefreshToken } = require("../../utils/jwtUtil");
const mongoose = require("mongoose");
const app = require("../../app"); // Assuming your Express app is in 'app.js'
const Product = require("../../models/Product");
const User = require("../../models/User");
// const Order = require("../../models/order");
// const Cart = require("../../models/cart");
const { ObjectId } = require("mongodb");
beforeAll(async () => {
//  monSer= await connectToDB();
});

// Clear the test database before each test
beforeEach(async () => {
})
const jwt = require("jsonwebtoken");

describe("API tests", () => {

  test("POST /api/addUser", async () => {
    const response = await request(app)
      .post("/adminAddUser").send({
        uname: "uname",
        email: "email@gmail.com",
        password: "uname",
        address: "address",
        contactNumber: 1234567890,
      })

    expect(response.status);
  },50000);
  
  test("POST /api/adminLogin", async ()=>{
    const response = await request(app).post("/AdminLogin").send({
        username:"Admin1",
        password:"Admin@123"
    })

    expect(response.body);
  },50000);

})
  
