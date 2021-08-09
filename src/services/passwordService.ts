import { compareSync, hashSync } from "bcryptjs";
import { IPasswordRepository } from "../repositories/IPasswordRepository";

export class PasswordService implements IPasswordRepository {
  async hashPassword(pass: string, numberHash: number) {
    const password = hashSync(pass, numberHash);
    return password;
  }

  async comparePassword(sendPass: string, existingPass: string) {
    return compareSync(sendPass, existingPass);
  }

  async updatePassword(newPass: string) {
    return;
  }

  async recoveryPassword(email: string) {
    return;
  }
}
