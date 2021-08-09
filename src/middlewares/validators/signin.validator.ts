import { body } from "express-validator";

export const signinValidator = [
  body("email").isEmail().notEmpty(),
  body("password").isString().notEmpty().isLength({ min: 8, max: 40 }),
];
