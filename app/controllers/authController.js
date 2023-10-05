import User from "../models/User"
import bcrypt from "bcryptjs";
import jwt from '@elysiajs/jwt'
import { auth } from "../middlewares/authMiddleware";
// import { auth } from "../middlewares/authMiddleware";


function authController() {
    return {
        //userController
        async UserSignUp(context) {
            try {
                const reqBody = context.body;
                const user = await auth.createUser({
                    key: {
                        providerId: "email",
                        providerUserId: reqBody.email,
                        password: reqBody.password
                    },
                    attributes: {
                        email: reqBody.email,
                        userName: reqBody.userName
                    }
                })
                console.log("user", user);


                context.set.status = 200;
                return { success: true, message: "Usser registration done.", }
            } catch (err) {
                console.log(err);
                context.set.status = 400
                return { success: false, message: err }
            }
        },

        //user login
        async userlogin({ body, set, setCookie }) {
            try {
                // console.log("request", request);
                const { email, password } = body;

                const key = await auth.useKey("email", email, password)

                const session = await auth.createSession({
                    userId: key.userId,
                    attributes: {
                        db: "I am who!"
                    }

                })
                const sessionCookie = auth.createSessionCookie(session).serialize()
                auth.deleteDeadUserSessions()
                setCookie("luciacook", sessionCookie)
                set.status = 200
                return { success: true, message: "Loggedin", }
            } catch (err) {
                set.status = 500;
                return { success: false, message: err.message }
            }
        }
    }
}

export default authController