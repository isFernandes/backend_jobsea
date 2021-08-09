import { IProject } from "../interfaces/IProject";
import { IServiceRepository } from "./IServiceRepository";

export interface IProjectRepository extends IServiceRepository {
  getAllProjectCreatedByUser(id: string): Promise<IProject[] | any>;
}
