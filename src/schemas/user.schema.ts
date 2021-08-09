import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  bio: { type: String, required: false },
  imgUrl: { type: String, required: false },
  softSkills: { type: String, required: false },
  techsSkills: { type: String, required: false },
  active: { type: Boolean, default: true },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const UserModel = model<IUser>("User", schema);

export { UserModel };
