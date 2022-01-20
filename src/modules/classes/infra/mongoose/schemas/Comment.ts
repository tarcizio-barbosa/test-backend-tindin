import { ObjectId, Schema } from "mongoose";
import { v4 as uuid } from "uuid";

import { IComment } from "../../../interfaces/IComment";

const commentSchema = new Schema<IComment>(
  {
    comment: {
      type: String,
      required: true,
    },
    id_class: {
      type: String,
      ref: "Class",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

class Comment {
  id: string;
  comment: string;
  id_class: ObjectId | string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { commentSchema, Comment };
