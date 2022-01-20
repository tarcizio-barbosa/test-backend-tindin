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

  async list(): Promise<IComment[]> {
    return this.Repository.find({});
  }

  async findById(id: string): Promise<IComment> {
    const oneComment = await this.Repository.findOne({ id });

    return oneComment;
  }

  async deleteComment(id: string): Promise<void> {
    await this.Repository.findOneAndDelete({ id });
  }
}

export { CommentsRepository };
