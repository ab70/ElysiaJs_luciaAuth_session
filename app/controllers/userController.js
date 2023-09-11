import { auth } from "../middlewares/authMiddleware";
import {cookie} from "@elysiajs/cookie"
function userController() {
    return {
        //userController
        async userTestController(context ) {
         
            // console.log(context.set.user);
            const bard = {
                name: "Bard",
                age: 2,
                species: "large language model",
                created_at: new Date("2023-07-20T09:34:14+06:00"),
                updated_at: new Date("2023-07-20T09:34:14+06:00"),
                knowledge: [
                    {
                        id: 1,
                        subject: "math",
                        content: "2 + 2 = 4"
                    },
                    {
                        id: 2,
                        subject: "science",
                        content: "The earth is round"
                    },
                    {
                        id: 3,
                        subject: "history",
                        content: "The French Revolution was a major turning point in world history"
                    }
                ],
                skills: ["writing", "translation", "coding", "data analysis"]
            };

            context.set.status= 200
            return { success: true, message: "Fetched.", data: bard }
        },

        //Get user details 
        async userTestController1(context){
            try{

            }catch(err){
                
            }
        },

        //check user 
        async dashboard({cookie: {luciacook}}){
            try{
                // const reqBody = context.body;
                const sessionId = auth.readSessionCookie(luciacook)
                console.log("session", sessionId);
                const sessionValid = await auth.validateSession(sessionId)
                console.log("SessionValid", sessionValid);
            }catch(err){
                console.log(err);
            }
        }
    }
}

export default userController