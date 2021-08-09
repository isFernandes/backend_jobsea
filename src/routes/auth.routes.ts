import { checkDuplicateUsernameOrEmail } from "../middlewares/verifySignUp";
import { AuthController } from "../controllers/auth.controller";

import { signupValidator } from "../middlewares/validators/signup.validator";
import { signinValidator } from "../middlewares/validators/signin.validator";

const authRoutes = require("express").Router();
const authController = new AuthController();

const PREFIX = "/api";

authRoutes.post(
  `${PREFIX}`,
  signupValidator, //validator
  checkDuplicateUsernameOrEmail, //middleware
  authController.signup
);

authRoutes.post(`${PREFIX}/login`, signinValidator, authController.signin);

export { authRoutes };
