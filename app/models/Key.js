import mongodb from "mongoose"

const Key = mongodb.model(
  "Key",
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

      hashed_password: String
    },
    { _id: false }
  )
)

export default Key;
