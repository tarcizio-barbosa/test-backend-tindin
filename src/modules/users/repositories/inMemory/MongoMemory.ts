import { Model, model } from "mongoose";

import { userSchema } from "../../infra/mongoose/schemas/User";
import { IUser } from "../../interfaces/IUser";
import { IUsersRepository } from "../IUsersRepository";

class MongoMemory implements IUsersRepository {
  private Repository: Model<IUser>;

  constructor() {
    this.Repository = model<IUser>("User", userSchema);
  }

  create(data: IUser): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
}

export { MongoMemory };
