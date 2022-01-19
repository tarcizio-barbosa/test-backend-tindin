import { ObjectId } from "mongoose";

interface IComment {
  id_class: ObjectId;
  comment: string;
  created_at: Date;
}

export { IComment };
