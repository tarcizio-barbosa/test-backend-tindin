import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IComment } from "../../interfaces/IComment";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";

@injectable()
class ListCommentsUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository
  ) {}
  async execute(): Promise<IComment[]> {
    const comments = await this.commentsRepository.list();

    return comments;
  }
}

export { ListCommentsUseCase };
