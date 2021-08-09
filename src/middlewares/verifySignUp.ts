import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

const checkDuplicateUsernameOrEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const foundUserByName = await userService.findOne({
      name: request.body.name,
    });

    const foundUserByEmail = await userService.findByEmail(request.body.email);

    if (foundUserByName) {
      return response.status(400).send({
        message: `Falha! Nome de usuário já existente! : ${request.body.username}`,
      });
    }

    if (foundUserByEmail) {
      return response
        .status(400)
        .send({ message: "Falha! Email já encontra em uso!" });
    }

    next();
  } catch (err) {
    return response.status(500).send({ message: err });
  }
};

export { checkDuplicateUsernameOrEmail };
