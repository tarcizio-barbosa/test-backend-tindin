import { Comment } from "../../infra/mongoose/schemas/Comment";
import { IComment } from "../../interfaces/IComment";
import { ICommentsRepository } from "../ICommentsRepository";

class InMemoryCommentsRepository implements ICommentsRepository {
  private comments: Comment[] = [];

  async create({ comment, id_class }: IComment): Promise<IComment> {
    const newComment = new Comment();

    Object.assign(newComment, { comment, id_class });

    this.comments.push(newComment);

    return newComment;
  }
}

export { InMemoryCommentsRepository };
