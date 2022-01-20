import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";
import { DeleCommentError } from "./DeleteCommentError";

@injectable()
class DeleteCommentUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository,
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const oneComment = await this.commentsRepository.findById(id);

    if (!oneComment) {
      throw new DeleCommentError();
    }

    await this.commentsRepository.deleteComment(id);

    await this.classesRepository.removeComment(id, oneComment.id_class);
  }
}

export { DeleteCommentUseCase };
