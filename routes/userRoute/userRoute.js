// userRoute.js
// This file defines the routes for the user resource

import { Elysia } from 'elysia';
const app = Elysia;

import userController from '../../app/controllers/userController.js';
import { checkUser, secondMiddlewre } from '../../app/middlewares/authMiddleware.js';
import authController from '../../app/controllers/authController.js';

// Define the routes for each controller method

// GET /user - get all users 
const userRoute = (app) => {
    app.group("/api/user", app => 
    app
    .get("/a", userController().userTestController, { beforeHandle: [checkUser, secondMiddlewre] }))

}

// Export the router
export default userRoute;
