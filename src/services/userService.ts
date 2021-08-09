import { Service } from "./service";
import schema from "../schemas";
import { IUserRepository } from "../repositories/IUserRepository";

const { UserModel } = schema;
export class UserService extends Service implements IUserRepository {
  constructor() {
    super(UserModel);
  }

  async findByEmail(email: string) {
    return await UserModel.findOne({ email }).select("password email name");
  }

  async findOne(filter: object) {
    return await UserModel.findOne(filter).populate("projects");
  }
}
