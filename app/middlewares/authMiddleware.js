import { lucia } from "lucia";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import Session from "../models/Session";
import User from "../models/User";
import Key from "../models/Key";
import { cookie } from "@elysiajs/cookie"
const checkUser = ({ set }) => {
    set.user = { L: "hello" }
}
const secondMiddlewre = ({ set }) => {
    set.user = { L: "sec" }
}
// 
// This is the lucia  auth main middleware which works with User, key, session schema
const auth = lucia({
    env: "DEV", //it has to be "PROD" in production mode
    adapter: mongoose({
        User,
        Key,
        Session
    }),
    env: "DEV",
    // This is important as it will return current users info
    /*
    getUserAttributes: ()=> {
    } 
    */
    // this configuration is important for returning session vlaue
    getSessionAttributes: (sessionData) => {
        return {
            db: sessionData.db
        }
    }
})
const validateSession = async ({ cookie: { luciacook }, set }) => {
    try {
        const sessionId = auth.readSessionCookie(luciacook)
        if (sessionId) {
            const sessionValid = await auth.validateSession(sessionId)
            if (sessionValid?.state !== "active") {
                set.status = 404;
                return { success: false, message: "Session Validation Failed" }
            }
            console.log(sessionValid); //log session object with status
            set.sessionValue = sessionValid.db
        } else {
            set.status = 404;
            return { success: false, message: "Session Validation Failed" }
        }

    } catch (err) {
        set.status = 500;
        return { success: false, message: err.message }
    }
}
export { checkUser, secondMiddlewre, auth, validateSession }