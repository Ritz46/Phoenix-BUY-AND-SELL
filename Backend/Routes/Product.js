const express = require("express");
const multer = require("multer");

const router = express.Router();
const productController = require("../controller/Product");
const user = require("../controller/User");
const cloudinary = require("cloudinary").v2;
// const {CloudinaryStorage} = require("multer-storage-cloudinary");


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const storage = multer.diskStorage({})

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     return cb(null, "./images"); // Directory to save uploads
//   },
//   filename: (req, file, cb) => {
//     return cb(null, file.originalname); // Unique filename
//   },
// });

const upload = multer({ storage: storage });


/**
 * @swagger
 * /getAllProducts:
 *   get:
 *     summary: Retrieve all products
 *     description: Retrieve a list of all products
 *     responses:
 *       '200':
 *         description: A JSON array of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The auto-generated ID of the product
 *                       title:
 *                         type: string
 *                         description: The title of the product
 *                       expectedPrice:
 *                         type: number
 *                         description: The expected price of the product
 *                       oldness:
 *                         type: string
 *                         description: The oldness of the product
 *                       description:
 *                         type: string
 *                         description: The description of the product
 *                       owner:
 *                         type: string
 *                         description: The owner of the product
 *                       imgs:
 *                         type: array
 *                         items:
 *                           type: string
 *                         description: Array of image URLs for the product
 *                       address:
 *                         type: string
 *                         description: The address of the product
 */

router.get("/getAllProducts", productController.getAllProducts);
/**
 * @swagger
 * /getSingleProduct:
 *   get:
 *     summary: Retrieve a single product
 *     description: Retrieve a single product by its ID
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to retrieve
 *     responses:
 *       '200':
 *         description: A JSON object representing the product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated ID of the product
 *                 title:
 *                   type: string
 *                   description: The title of the product
 *                 expectedPrice:
 *                   type: number
 *                   description: The expected price of the product
 *                 oldness:
 *                   type: string
 *                   description: The oldness of the product
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *                 owner:
 *                   type: string
 *                   description: The owner of the product
 *                 imgs:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Array of image URLs for the product
 *                 address:
 *                   type: string
 *                   description: The address of the product
 */
router.get("/getSingleProduct", productController.getSingleProduct);
/**
 * @swagger
 * /postOffer:
 *   post:
 *     summary: Add a new offer
 *     description: Endpoint to add a new offer.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: offerDetails
 *         description: Offer details to be added
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             offerer:
 *               type: string
 *               description: Name of the offerer
 *               example: John Doe
 *             productName:
 *               type: string
 *               description: Description of the product
 *               example: Smartphone
 *             productid:
 *               type: string
 *               description: ID of the product
 *               example: ABC123
 *             owner:
 *               type: string
 *               description: Owner of the product
 *               example: Jane Doe
 *             amount:
 *               type: number
 *               description: Amount of the product
 *               example: 500
 *             offerStatus:
 *               type: number
 *               description: Status of the offer
 *               example: 0
 *     responses:
 *       '201':
 *         description: Offer Added Successfully!
 *       '500':
 *         description: Internal Server Error
 */


router.post(
  "/postProduct",
  upload.array("images", 5),
  productController.postProduct
);
/**
 * @swagger
 * /getSearchResults:
 *   get:
 *     summary: Get search results
 *     description: Retrieve search results based on query parameters
 *     parameters:
 *       - in: query
 *         name: method
 *         schema:
 *           type: string
 *         required: true
 *         description: Search method (e.g., "tags")
 *       - in: query
 *         name: searchString
 *         schema:
 *           type: string
 *         required: true
 *         description: Search string
 *     responses:
 *       '201':
 *         description: A JSON array of search results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 foundProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The auto-generated ID of the product
 *                       title:
 *                         type: string
 *                         description: The title of the product
 *                       expectedPrice:
 *                         type: number
 *                         description: The expected price of the product
 *                       oldness:
 *                         type: string
 *                         description: The oldness of the product
 *                       description:
 *                         type: string
 *                         description: The description of the product
 *                       owner:
 *                         type: string
 *                         description: The owner of the product
 *                       imgs:
 *                         type: array
 *                         items:
 *                           type: string
 *                         description: Array of image URLs for the product
 *                       address:
 *                         type: string
 *                         description: The address of the product
 */
router.get("/getSearchResults", productController.getSearchResults);
/**
 * @swagger
 * /deleteProduct:
 *   delete:
 *     summary: Delete product
 *     description: Delete a product by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to delete
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal Server Error
 */

router.delete("/deleteProduct", productController.deleteProduct)
module.exports = router;
