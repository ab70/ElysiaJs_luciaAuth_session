import mongodb from "mongoose"

const Session = mongodb.model(
    "Session",
    new mongodb.Schema(
        {
            _id: {
                type: String,
                required: true
            },

            user_id: {
                type: String,
                required: true
            },

            active_expires: {
                type: Number,
                required: true
            },

            idle_expires: {
                type: Number,
                required: true
            },
            attributes: {}
        },
        { _id: false }
    )
)

export default Session;
