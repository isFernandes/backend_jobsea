export interface IProject {
  name: string;
  description: string;
  estimatedTime: number;
  tagTechniques: string;
  budget: number;
  active?: boolean;
  ownerId: string;
}
