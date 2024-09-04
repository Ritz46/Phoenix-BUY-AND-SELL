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

// 

describe("API tests", () => {
  // Test for getAllProducts
test("GET /api/allUsers", async () => {
  // Generate a mock token
  // const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
  // const token=generateToken(user)

  const response = await request(app)
    .get("/getAllUsers")
  // console.log(response);
  expect(response.status).toBe(200);
  expect(response.body.users.length).toBeTruthy(); // Check if products are returned
  // Add more assertions based on your API response
},50000);

test("GET /api/updatePass", async () => {
  // Generate a mock token
  // const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
  // const token=generateToken(user)

  const response = await request(app)
    .get("/updatePass").send({
      unamee: "Parth",
      pass: "Parth1",
    })
  // console.log(response.body);
  // expect(response.status).toBe(200);
  expect(typeof response.body.users).toBe('object'); // Check if products are returned
  // Add more assertions based on your API response
},50000);


test("DELETE /api/deleteUser", async()=>{
  const response = await request(app).delete("/deleteUser").send({
    userId : "65d0ba873e524a9c402f1830"
  })

  expect(response.status).toBeTruthy();
}, 50000);

})
