import { ObjectId } from "mongoose";

interface IComment {
  id_class?: string;
  comment: string;
  created_at?: Date;
  id?: string;
}

export { IComment };
