import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, },
    active_expires: { type: Number, required: true },
    idle_expires: { type: Number, required: true },
    data: { type: mongoose.Schema.Types.Mixed, default: {} }
})

const Session = mongoose.model("Session", sessionSchema)

export default Session;
