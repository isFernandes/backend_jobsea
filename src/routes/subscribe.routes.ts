import { verifyToken } from "../middlewares/authJwt";
import { SubscribeController } from "../controllers/subscribe.controller";

const PREFIX = "/api/subscribe";

const subscribeRoutes = require("express").Router();
const subsController = new SubscribeController();

subscribeRoutes.get(`${PREFIX}/all`, [verifyToken], subsController.listSubs);

//realizamos inscricao de usuario em projeto
subscribeRoutes.put(
  `${PREFIX}/:projectId`,
  [verifyToken],
  subsController.subscribe
);

//remove inscricao do usuario
subscribeRoutes.delete(
  `${PREFIX}/:projectId`,
  [verifyToken],
  subsController.removeSubscribe
);

export { subscribeRoutes };
