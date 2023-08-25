import mongodb from "mongoose";

const sessionSchema = new mongodb.Schema({
    userId: { type: String, required: true },
    _id: { type: mongodb.Schema.Types.ObjectId, required: true },
    expiresAt: { type: Date },
    data: { type: mongodb.Schema.Types.Mixed, default: {} }
}, { _id: false });

const Session = mongodb.model("Session", sessionSchema)

export default Session;
