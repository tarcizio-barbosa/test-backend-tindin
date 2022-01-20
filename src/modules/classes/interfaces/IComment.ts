import { ObjectId } from "mongoose";

interface IComment {
  id_class?: ObjectId | string;
  comment: string;
  created_at?: Date;
  id?: string;
}

export { IComment };
