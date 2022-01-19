import { User } from "../../infra/mongoose/schemas/User";
import { IUser } from "../../interfaces/IUser";
import { IUsersRepository } from "../IUsersRepository";

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create({ name, email, password }: IUser): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<IUser> {
    return this.users.find((user) => user.email === email);
  }
}

export { InMemoryUsersRepository };
