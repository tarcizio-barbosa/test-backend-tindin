import { IUser } from "../interfaces/IUser";

interface IUsersRepository {
  create(data: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
}

export { IUsersRepository };
