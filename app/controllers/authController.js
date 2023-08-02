import User from "../models/User"
import bcrypt from "bcryptjs";
import jwt from '@elysiajs/jwt'

function authController() {
    return {
        //userController
        async UserSignUp(context) {
            try {
                const reqBody = context.body;
                let newUser = new UserSchema({
                    userName: reqBody.userName,
                    userPhone: reqBody.userPhone,
                    userEmail: reqBody.userEmail,
                    userPass: bcrypt.hashSync(reqBody.userPass, 10)
                })
                const saveUser = await newUser.save()

                context.set.status = 200;
                return { success: true, message: "Usser registration done.", data: saveUser }
            } catch (err) {

                context.set.status = 400
                return { success: false, message: "User registration failed." }
            }
        },

        //user login
        async userlogin({ body,setCookie, set, jwt, cookie }) {
            try {
                const reqBody = body;
                const findUser = await User.findOne({ userEmail: reqBody.userEmail }).select("_id userEmail userPass userPhone")
                if (!findUser) {
                    set.status = 404;
                    return { success: false, message: " Cant find user" }
                }
                const comparePass = bcrypt.compareSync(reqBody.userPass.toString(), findUser.userPass)
                if (!comparePass) {
                    return { success: false, message: "Password error." }
                }
            
                const token = await jwt.sign({ id: findUser._id, email: findUser.userEmail });
                console.log(token);
                setCookie("token", token, { httpOnly: true })
                return { success: true, message: "Loggedin", }
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default authController