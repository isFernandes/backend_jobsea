import { ProjectController } from "../controllers/project.controller";
import { verifyToken } from "../middlewares/authJwt";

const projectRoutes = require("express").Router();
const projectController = new ProjectController();
const PREFIX = "/api/project";

projectRoutes.get(`${PREFIX}/all`, projectController.getAllProject);

projectRoutes.get(
  `${PREFIX}/all/:id`,
  [verifyToken],
  projectController.getAllProjectUsers
);

projectRoutes.get(`${PREFIX}/:id`, [verifyToken], projectController.getProject);

projectRoutes.post(
  `${PREFIX}/:ownerId`,
  [verifyToken],
  projectController.createProject
);

projectRoutes.put(
  `${PREFIX}/:id`,
  [verifyToken],
  projectController.updateProject
);

projectRoutes.put(
  `${PREFIX}/reativar/:id`,
  [verifyToken],
  projectController.reativarProjeto
);

projectRoutes.delete(
  `${PREFIX}/:id`,
  [verifyToken],
  projectController.deleteProject
);

export { projectRoutes };
