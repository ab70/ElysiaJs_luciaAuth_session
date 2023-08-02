import mongoose from "mongoose"

/* Creating a schema for the user model. */

const Userschema = new mongoose.Schema({
    userName: { type: String, default: '', trim: true },
    userEmail: {
        type: String, default: '',
        trim: true,
        match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Invalid email address'
    },
    userPhone: { type: String, default: '', trim: true, },
    userPass: { type: String, required: true, trim: true, minlength: 5, select: false },
    userPic: { type: String, trim: true, default: '' },
    otp: { type: Number, trim: true, default: null, select: false },
    otpValid: { type: Date, trim: true, default: null },
    userAuthStatus: { type: String, enum: ["active", "inactive"], default: "inactive", trim: true },
    userType: { type: String, enum: ["subscriber", "admin", "moderator", "superAdmin"], default: "subscriber", trim: true },
    subscription: [
        {
            type: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription" },
            expires: { type: Date, default: null }
        }
    ]

}, { timestamps: true })
const User = mongoose.model("User", Userschema)
export default User