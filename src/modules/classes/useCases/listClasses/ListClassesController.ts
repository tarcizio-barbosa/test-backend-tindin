import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClassesUseCase } from "./ListClassesUseCase";

class ListClassesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listClassesUseCase = container.resolve(ListClassesUseCase);

    const allClasses = await listClassesUseCase.execute();

    return response.json(allClasses);
  }
}

export { ListClassesController };
