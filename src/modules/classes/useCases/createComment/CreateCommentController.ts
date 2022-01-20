import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment, id_class } = request.body;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    const newComment = await createCommentUseCase.execute({
      comment,
      id_class,
    });

    return response.status(201).json(newComment);
  }
}

export { CreateCommentController };
