// userRoute.js
// This file defines the routes for the user resource

import { Elysia } from 'elysia';
const app = Elysia;

import userController from '../../app/controllers/userController.js';
import  {checkUser} from '../../app/middlewares/authMiddleware.js';
import authController from '../../app/controllers/authController.js';

// Define the routes for each controller method

// GET /auth - get all users 
const authRoute = (app) => {
    app.group("/api/auth", app => 
    app
    .post("/signup", authController().UserSignUp)
    .post("/login", authController().userlogin)
    )
}



// Export the router
export default authRoute;
