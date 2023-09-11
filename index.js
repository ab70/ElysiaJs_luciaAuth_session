import { Elysia } from "elysia";
import initialRoutes from "./routes/api.js";
// const initialRoutes = require("./routes/api")
import mongodb from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" })
import { cookie } from '@elysiajs/cookie';
// import { jwt } from "@elysiajs/jwt";

// create an ElysiaJS application
// const app = new elysia.Application();
// mount the express app to the ElysiaJS
const app = new Elysia()
// / start the ElysiaJS app
// elysiaApp.listen(3000, () => {
//     console.log('ElysiaJS app started on port 3000');
// });

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
