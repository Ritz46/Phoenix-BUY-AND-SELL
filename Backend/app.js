const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan=require('morgan')
let rfs=require('rotating-file-stream');
const helmet=require('helmet');
let path=require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = require('./swaggerOptions');

const cors=require('cors')

const productRoutes=require('./Routes/Product');
const offerRoutes=require('./Routes/Offers')
const userRoutes=require('./Routes/User');
const queryRoutes=require('./Routes/Query');
const AdminRoutes=require('./Routes/Admin');
const connectDB = require("./utils/connectToDB");

// const mongodbURI = "mongodb+srv://parthirache8:ufPeWVX7HabgpyVh@cluster0.eo9svyz.mongodb.net/Phoenix-E-Mart"
// console.log(mongodbURI)
// mongoose.connect("mongodb+srv://parthirache8:ufPeWVX7HabgpyVh@cluster0.eo9svyz.mongodb.net/Phoenix-E-Mart")

const app = express();

connectDB()

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
let accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(morgan("combined", { stream: accessLogStream }));

app.use(productRoutes);
app.use(offerRoutes);
app.use(userRoutes);
app.use(queryRoutes);
app.use(AdminRoutes);

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong !");
});

module.exports = app;

app.listen(8000, () => {
  console.log("server is up and running !");
});

