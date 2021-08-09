import { IUser } from "../interfaces/IUser";

export interface IAuthRepository {
  singup(singupData: IUser): Promise<void>;
  singin(email: string, password: string): Promise<object>;
}
