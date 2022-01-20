import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IComment } from "../../interfaces/IComment";
import { IClassesRepository } from "../../repositories/IClassesRepository";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";
import { GetClassError } from "../getClass/GetClassError";

@injectable()
class CreateCommentUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository,
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}
  async execute({ comment, id_class }: IComment): Promise<IComment> {
    const oneClass = await this.classesRepository.findById(id_class as string);

    if (!oneClass) {
      throw new GetClassError();
    }

    const newComment = await this.commentsRepository.create({
      comment,
      id_class,
    });

    await this.classesRepository.addComments(oneClass.id, newComment);

    return newComment;
  }
}

export { CreateCommentUseCase };
