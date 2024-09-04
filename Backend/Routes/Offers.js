const express = require("express");

const router = express.Router();
const OfferController = require("../controller/Offer");
/**
 * @swagger
 * /getAllOffers:
 *   get:
 *     summary: Retrieve all offers
 *     description: Retrieve a list of all offers
 *     responses:
 *       '200':
 *         description: A JSON array of offers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Offers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Offer'
 */
router.get("/getAllOffers", OfferController.getAllOffers);
/**
 * @swagger
 * /getSingleOffer:
 *   get:
 *     summary: Retrieve a single offer
 *     description: Retrieve a single offer by its ID
 *     parameters:
 *       - in: query
 *         name: OfferId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the offer to retrieve
 *     responses:
 *       '200':
 *         description: A JSON object representing the offer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Offer'
 */
router.get("/getSingleOffer", OfferController.getSingleOffer);
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

router.post("/postOffer", OfferController.postOffer);
/**
 * @swagger
 * /updateOffers:
 *   put:
 *     summary: Update offers
 *     description: Update offers based on product and offer IDs
 *     parameters:
 *       - in: query
 *         name: pid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to update offers for
 *       - in: query
 *         name: oid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the offer to update
 *     responses:
 *       '201':
 *         description: Offers updated successfully
 */
router.put("/updateOffers", OfferController.updateOffers);

module.exports=router;
