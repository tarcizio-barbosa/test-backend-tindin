import { User } from "../../infra/mongoose/schemas/User";
import { IUser } from "../../interfaces/User";
import { IUsersRepository } from "../IUsersRepository";

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create(data: IUser): Promise<void> {
    const user = new User();

    Object.assign(user, data);

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<IUser> {
    return this.users.find((user) => user.email === email);
  }
}

export { InMemoryUsersRepository };
