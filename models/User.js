import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "email already exists"],
      required: [true, "email is required"],
    },
    username: {
      type: String,
      required: [true, "user name is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Properties" }],
  },
  {
    timestamps: true,
  }
);

const User = models.user || model("User", UserSchema);

export default User;
