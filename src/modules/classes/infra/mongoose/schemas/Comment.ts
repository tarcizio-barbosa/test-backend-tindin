import { Schema } from "mongoose";

import { IComment } from "../../../interfaces/IComment";

const commentSchema = new Schema<IComment>(
  {
    comment: {
      type: String,
      required: true,
    },
    id_class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export { commentSchema };
