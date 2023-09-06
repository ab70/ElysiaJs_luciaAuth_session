import mongodb from "mongoose"

const User = mongodb.model(
    "User",
    new mongodb.Schema(
        {
            _id: {
                type: String,
                required: true
            },
            email: { type: String },
            userName: {
                type: String,
            },

        },
        { _id: false }
    )
)

export default User