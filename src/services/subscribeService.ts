import { ISubscribeRepository } from "../repositories/ISubscribeRepository";
import { ProjectService } from "./projectService";
import { UserService } from "./userService";

//instanciando classes
const projectService = new ProjectService();
const userService = new UserService();

export class SubscribeService implements ISubscribeRepository {
  async subscribe(userId: string, projectId: string) {
    const projectForSub = await projectService.findById(projectId);

    const user = await userService.findById(userId);

    if (projectForSub.ownerId === user._id) {
      throw new Error(`Impossivel se inscrever no seu proprio Project!`);
    }

    if (user.projects.includes(projectId)) {
      throw new Error(`Voce já está inscrito neste projeto!`);
    }

    user.projects.push(projectId);

    await user.save();
  }

  async listSubscribes(userId: string) {
    const userSubs = await userService.findOne({ id: userId });

    return userSubs?.projects;
  }

  async removeSubscribe(userId: string, projectId: string) {
    const user = await userService.findById(userId);

    user.projects.filter((project: string) => {
      return project !== projectId;
    });

    await user.save();

    if (user.projects.includes(projectId)) {
      throw new Error(`Voce já está inscrito neste projeto!`);
    }
  }
}
