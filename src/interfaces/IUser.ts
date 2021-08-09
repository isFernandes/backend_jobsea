import { Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  bio?: string;
  imgUrl?: string;
  softSkills?: string;
  techsSkills?: string;
  active?: boolean;
  projects?: Array<Schema.Types.ObjectId>;
}
