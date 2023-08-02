import userController from "../controllers/userController.js"
import Session from "../models/Session.js"
import User from "../models/User.js";
import { lucia } from "lucia";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import Key from "../models/Key.js";
const checkUser = ({ set }) => {
    // console.log("i");
    set.user = { L: "hello" }

}
const secondMiddlewre = ({ set }) => {

    set.user = { L: "sec" }
}
// 


export { checkUser, secondMiddlewre }