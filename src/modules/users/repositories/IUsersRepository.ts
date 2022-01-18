import { IUser } from "../interfaces/User";

interface IUsersRepository {
  create(data: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
}

export { IUsersRepository };
