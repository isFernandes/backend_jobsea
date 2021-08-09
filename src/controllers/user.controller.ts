import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export class UserController {
  async getAll(request: Request, response: Response) {
    try {
      const users = await userService.getAll();
      return response.status(200).json(users);
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async getUser(request: Request, response: Response) {
    try {
      const users = await userService.findById(request.params.id);
      return response.status(200).json(users);
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async updateUser(request: Request, response: Response) {
    try {
      const updatedUser = await userService.update(
        request.params.id,
        request.body
      );

      return response.status(200).json({
        message: `Usuario atualizado com sucesso!`,
        user: updatedUser,
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }

  async deleteUser(request: Request, response: Response) {
    try {
      await userService.delete(request.params.id);
      return response
        .status(200)
        .json({ message: `Usuario deletado com sucesso` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }
  async reactivarUser(request: Request, response: Response) {
    try {
      await userService.reactive(request.params.id);
      return response
        .status(200)
        .json({ message: `Usuario reativado com sucesso` });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Ocorreu um erro, tente mais tarde!` });
    }
  }
}
