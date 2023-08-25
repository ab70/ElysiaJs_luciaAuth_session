import mongodb from "mongoose";

const sessionSchema = new mongodb.Schema({
    userId: {
        type: mongodb.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    expiresAt: { type: Date },

    // data: { type: mongoose.Schema.Types.Mixed, default: {} }
})

const Session = mongodb.model("Session", sessionSchema)

export default Session;
