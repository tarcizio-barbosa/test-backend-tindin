import { Schema } from "mongoose";
import { v4 as uuid } from "uuid";

import { IUser } from "../../../interfaces/IUser";

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    default: uuid,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { userSchema, User };
