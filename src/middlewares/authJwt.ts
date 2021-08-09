import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
const config = require("../config/auth.config");

const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return response.status(403).send({ message: "Sem token de validacao!" });
  }

  jwt.verify(token, config.secret, (err: any, decoded: any) => {
    if (err) {
      return response.status(401).send({ message: "Não autorizado!" });
    }
    request.user = decoded;
    next();
  });
};

export { verifyToken };
