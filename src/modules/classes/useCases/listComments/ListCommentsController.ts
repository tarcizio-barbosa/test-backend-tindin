import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCommentsUseCase } from "./ListCommentsUseCase";

class ListCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCommentsUseCase = container.resolve(ListCommentsUseCase);

    const allComments = await listCommentsUseCase.execute();

    return response.json(allComments);
  }
}

export { ListCommentsController };
