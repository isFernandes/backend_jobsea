import { body } from "express-validator";

export const signupValidator = [
  body("email").isEmail().notEmpty(),
  body("name").isString().notEmpty(),
  body("password").isString().notEmpty().isLength({ min: 8, max: 40 }),
];
