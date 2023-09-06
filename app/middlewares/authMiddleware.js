import { lucia } from "lucia";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import Session from "../models/Session";
import User from "../models/User";
import Key from "../models/Key";
const checkUser = ({ set }) => {
    set.user = { L: "hello" }
}
const secondMiddlewre = ({ set }) => {
    set.user = { L: "sec" }
}
// 

const auth = lucia({
    env: "DEV",
    adapter: mongoose({
        User,
        Key,
        Session
    }),
    env: "DEV"
})
export { checkUser, secondMiddlewre, auth }