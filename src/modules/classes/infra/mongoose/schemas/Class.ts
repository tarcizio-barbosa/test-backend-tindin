import { Schema } from "mongoose";
import { v4 as uuid } from "uuid";

import { IClass } from "../../../interfaces/IClass";
import { IComment } from "../../../interfaces/IComment";
import { commentSchema } from "./Comment";

const classSchema = new Schema<IClass>(
  {
    id: {
      type: String,
      required: true,
      default: uuid,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    date_init: {
      type: Date,
      required: true,
    },
    date_end: {
      type: Date,
      required: true,
    },
    comments: [commentSchema],
    total_comments: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

class Class {
  id: string;
  name: string;
  description: string;
  video: string;
  date_init: Date;
  date_end: Date;
  comments: Array<IComment>;
  total_comments: number;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
    if (!this.total_comments) {
      this.total_comments = 0;
    }
    if (!this.comments) {
      this.comments = [];
    }
  }
}

export { classSchema, Class };
