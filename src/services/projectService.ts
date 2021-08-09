import { Service } from "./service";
import schema from "../schemas";
import { IProjectRepository } from "../repositories/IProjectRepository";

const { ProjectModel } = schema;

export class ProjectService extends Service implements IProjectRepository {
  constructor() {
    super(ProjectModel);
  }

  async getAllProjectCreatedByUser(ownerId: string) {
    return await ProjectModel.find({ ownerId });
  }

  async getAll() {
    return await ProjectModel.find().populate("ownerId");
  }

  async findProject(id: string) {
    return await ProjectModel.findOne({ _id: id }).populate("ownerId");
  }
}
