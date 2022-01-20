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

  async list(): Promise<IComment[]> {
    const allComments = this.comments;

    return allComments;
  }

  async findById(id: string): Promise<IComment> {
    const oneComment = this.comments.find((comment) => comment.id === id);

    return oneComment;
  }

  async deleteComment(id: string): Promise<void> {
    const oneComment = this.comments.findIndex((comment) => comment.id === id);

    this.comments.splice(oneComment, 1);
  }
}

export { InMemoryCommentsRepository };
