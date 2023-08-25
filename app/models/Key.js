import mongodb from "mongoose";

const keySchema = new mongodb.Schema({
    _id: { type: String },
    user_id: { type: String },
    hashed_password: { type: String }
}, { _id: false })

const Key = mongodb.model("Key", keySchema)

export default Key;
