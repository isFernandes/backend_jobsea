import { verifyToken } from "../middlewares/authJwt";
import { UserController } from "../controllers/user.controller";

const PREFIX = "/api/user";

const userRoutes = require("express").Router();
const userController = new UserController();

//retornamos lista de usuario ativos
userRoutes.get(`${PREFIX}/all`, userController.getAll);

//retornamos usuario selecionado
userRoutes.get(`${PREFIX}/:id`, [verifyToken], userController.getUser);

//atualizamos usuario logado
userRoutes.put(`${PREFIX}/:id`, [verifyToken], userController.updateUser);

//realizamos inscricao de usuario em projeto
userRoutes.put(`${PREFIX}/projeto/:id`, [verifyToken]);

//desativamos um usuario
userRoutes.delete(`${PREFIX}/:id`, [verifyToken], userController.deleteUser);

//reativamos um usuario deletado
userRoutes.put(
  `${PREFIX}/reativar/:id`,
  [verifyToken],
  userController.reactivarUser
);

export { userRoutes };
