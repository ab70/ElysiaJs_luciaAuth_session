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
        async userlogin( {body, set, setCookie}) {
            try {
                // console.log("request", request);
                const { email, password } = body;

                const key = await auth.useKey("email", email, password)

                const session = await auth.createSession({
                    userId: key.userId,

                })
                const sessionCookie = auth.createSessionCookie(session).serialize()
                setCookie("l-c",sessionCookie)

                // const authRequest = auth.handleRequest(context)
                // console.log("authReq", authRequest);
                // const sessionCookie = authRequest.setSession(session);
                // setCookie("sessionCookie", sessionCookie.serialize());
                // console.log("Data", data);
                // setCookie("session", session.id, { expires: new Date(Date.now() + 360000) })
                // const token = await jwt.sign({ id: findUser._id, email: findUser.userEmail });
                // console.log(token);
                // setCookie("token", token, { httpOnly: true })
                set.status = 200
                return { success: true, message: "Loggedin", }
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default authController