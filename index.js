import { Elysia } from "elysia";
import initialRoutes from "./routes/api.js";
// const initialRoutes = require("./routes/api")
import mongodb from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" })
import { cookie } from '@elysiajs/cookie';
// import { jwt } from "@elysiajs/jwt";

const app = new Elysia()


mongodb.set("strictQuery", true)
mongodb.connect(process.env.Mongodb_Conenction, {
  useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => { console.log("mongodb connected"); })



// app.use(
//   jwt({
//     name: 'jwt',
//     // This should be Environment Variable
//     secret: process.env.JWT_SECRET
//   })
// )
app.use(cookie())


initialRoutes(app)
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
