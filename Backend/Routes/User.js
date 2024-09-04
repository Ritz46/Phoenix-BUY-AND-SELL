const express = require("express");

const router = express.Router();
const usercontroller=require('../controller/User');
/**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, and password
 *     parameters:
 *       - in: body
 *         name: userData
 *         description: User data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             Email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '201':
 *         description: Successfully registered the user
 */

router.post('/signUp',usercontroller.signUp);
/**
 * @swagger
 * /signIn:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate user with username and password
 *     parameters:
 *       - in: body
 *         name: userData
 *         description: User data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '201':
 *         description: Successfully authenticated
 *       '401':
 *         description: Invalid username or password
 */

router.post('/signIn',usercontroller.signIn);
/**
 * @swagger
 * /Changepass:
 *   put:
 *     summary: Update user password
 *     description: Update user password by providing username and new password
 *     parameters:
 *       - in: body
 *         name: userData
 *         description: User data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             newPass:
 *               type: string
 *     responses:
 *       '200':
 *         description: Password updated successfully
 */

router.put('/Changepass', usercontroller.changePass)
/**
 * @swagger
 * /getAllUsers:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       '200':
 *         description: List of users retrieved successfully
 */
router.get('/getAllUsers', usercontroller.getAllUsers);
/**
 * @swagger
 * /deleteUser:
 *   delete:
 *     summary: Delete user
 *     description: Delete a user by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/deleteUser', usercontroller.deleteUser);

router.get('/updatePass', usercontroller.updatePass);
module.exports=router;
