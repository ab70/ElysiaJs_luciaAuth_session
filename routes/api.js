// api.js
// This file defines the route groups for the API



// Import the user routes
import userRoute from './userRoute/userRoute.js';

import authRoute from "./authRoute/authRoute.js";

// Define the route groups for each resource
const initRoutes = (app)=> {
    //  /api/user routes
    userRoute(app)
    //   /api/auth
    authRoute(app)
}

// Export the router
export default initRoutes;

