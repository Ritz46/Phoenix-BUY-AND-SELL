const express = require("express");


const router = express.Router();
const QueryController = require("../controller/Query");
/**
 * @swagger
 * /getAllQuery:
 *   get:
 *     summary: Retrieve all queries
 *     description: Retrieve a list of all queries
 *     responses:
 *       '200':
 *         description: A JSON array of queries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 queries:
 *                   type: array
 */
router.get('/getAllQuery',QueryController.getAllQuery);
/**
 * @swagger
 * /postQwuery:
 *   post:
 *     summary: Post a new query
 *     description: Endpoint to post a new query.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: requestBody
 *         description: JSON request body for posting a new query
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             query:
 *               type: string
 *             querrier:
 *               type: string
 *     responses:
 *       '201':
 *         description: Query Posted Successfully!
 *       '500':
 *         description: Internal Server Error
 */

router.post('/postQwuery',QueryController.postQwuery);

module.exports=router;
