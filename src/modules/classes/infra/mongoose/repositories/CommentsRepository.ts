import { model, Model } from "mongoose";

import { IComment } from "../../../interfaces/IComment";
import { ICommentsRepository } from "../../../repositories/ICommentsRepository";
import { commentSchema } from "../schemas/Comment";

class CommentsRepository implements ICommentsRepository {
  private Repository: Model<IComment>;

  constructor() {
    this.Repository = model<IComment>("Comment", commentSchema);
  }

  async create({ comment, id_class }: IComment): Promise<IComment> {
    const newComment = new this.Repository({
      comment,
      id_class,
    });

    await newComment.save();

    return newComment;
  }
}

export { CommentsRepository };
