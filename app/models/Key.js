import mongoose from "mongoose";

const keySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    hashed_password: {type: String}
})

const Key = mongoose.model("Key", keySchema)

export default Key;
