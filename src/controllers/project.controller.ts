import { Request, Response } from "express";
import { ProjectService } from "../services/projectService";

const projectService = new ProjectService();

class ProjectController {
  async getAllProject(request: Request, response: Response) {
    try {
      const projects = await projectService.getAll();
      return response.status(200).json(projects);
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async getAllProjectUsers(request: Request, response: Response) {
    try {
      const projects = await projectService.getAllProjectCreatedByUser(
        request.user.id
      );
      return response.status(200).json(projects);
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async getProject(request: Request, response: Response) {
    try {
      const project = await projectService.findProject(request.params.id);

      return response.status(200).json(project);
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async createProject(request: Request, response: Response) {
    request.body.ownerId = request.params.ownerId;

    try {
      await projectService.create(request.body);
      return response
        .status(200)
        .json({ message: `Projeto criado com sucesso!` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async updateProject(request: Request, response: Response) {
    try {
      await projectService.update(request.params.id, request.body);
      return response.status(200).json({ message: `Atualizado com sucesso!` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async reativarProjeto(request: Request, response: Response) {
    try {
      await projectService.reactive(request.params.id);
      return response
        .status(200)
        .json({ message: `Projeto reativado com sucesso!` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async deleteProject(request: Request, response: Response) {
    try {
      await projectService.delete(request.params.id);
      return response
        .status(200)
        .json({ message: `Projeto deletado com sucesso!` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }
}

export { ProjectController };
