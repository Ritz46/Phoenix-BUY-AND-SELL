const express = require("express");

const router = express.Router();
const AdminController=require('../controller/Admin');
/**
 * @swagger
 * /AdminLogin:
 *   post:
 *     summary: Admin login
 *     description: Authenticate admin with username and password
 *     parameters:
 *       - in: body
 *         name: adminCredentials
 *         description: Admin credentials
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             anmae:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '201':
 *         description: Admin login successful
 *       '404':
 *         description: Admin not found
 */




router.post('/AdminLogin',AdminController.AdminLogin);
/**
 * @swagger
 * /adminAddUser:
 *   post:
 *     summary: Add a new user by admin
 *     description: Add a new user with username, email, contact number, and address by admin
 *     parameters:
 *       - in: body
 *         name: userData
 *         description: User data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             uname:
 *               type: string
 *             email:
 *               type: string
 *             contactNumber:
 *               type: string
 *             address:
 *               type: string
 *     responses:
 *       '201':
 *         description: User registered successfully
 */

router.post('/adminAddUser',AdminController.adminAddUser);

module.exports=router;
