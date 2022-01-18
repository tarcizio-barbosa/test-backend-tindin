import { model, Model } from "mongoose";

import { IUser } from "../../../interfaces/IUser";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { userSchema } from "../schemas/User";

class UsersRepository implements IUsersRepository {
  private Repository: Model<IUser>;

  constructor() {
    this.Repository = model<IUser>("User", userSchema);
  }

  async create({ name, email, password }: IUser): Promise<void> {
    const user = new this.Repository({
      name,
      email,
      password,
    });

    await user.save();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.Repository.findOne({ email }).exec();

    return user;
  }
}

export { UsersRepository };
