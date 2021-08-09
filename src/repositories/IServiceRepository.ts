import { IProject } from "../interfaces/IProject";
import { IUser } from "../interfaces/IUser";

export interface IServiceRepository {
  findById(id: string): Promise<IUser | IProject | null>;
  getAll(): Promise<IUser[] | IProject[]>;
  create(data: object): Promise<void>;
  update(id: string, data: object): Promise<void>;
  delete(id: string): Promise<void>;
  reactive(id: string): Promise<void>;
}
