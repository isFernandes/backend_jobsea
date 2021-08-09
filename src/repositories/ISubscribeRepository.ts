import { IProject } from "../interfaces/IProject";

export interface ISubscribeRepository {
  subscribe(userId: string, projectId: string): Promise<void>;
  listSubscribes(userId: string): Promise<any>;
  removeSubscribe(userId: string, projectId: string): Promise<void>;
}
