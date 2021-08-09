import { Schema, model } from "mongoose";
import { IProject } from "../interfaces/IProject";

const schema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    estimatedTime: { type: Number, required: true },
    tagTechniques: { type: String, required: true },
    budget: { type: Number, required: true },
    active: { type: Boolean, default: true },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ProjectModel = model<IProject>("Project", schema);

export { ProjectModel };
