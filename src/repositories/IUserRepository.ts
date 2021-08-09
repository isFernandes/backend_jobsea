import { IUser } from "../interfaces/IUser";
import { IServiceRepository } from "./IServiceRepository";

export interface IUserRepository extends IServiceRepository {
  findByEmail(email: string): Promise<IUser | null>;
  findOne(filter: object): Promise<IUser | null>;
}
