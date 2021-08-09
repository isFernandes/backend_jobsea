export interface IPasswordRepository {
  recoveryPassword(email: string): Promise<void>;
  updatePassword(newPass: string): Promise<void>;
  hashPassword(pass: string, numberHash: number): Promise<string>;
  comparePassword(sendPass: string, existingPass: string): Promise<boolean>;
}
