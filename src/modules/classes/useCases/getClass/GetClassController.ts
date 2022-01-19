import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetClassUseCase } from "./GetClassUseCase";

class GetClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getClassUseCase = container.resolve(GetClassUseCase);

    const oneClass = await getClassUseCase.execute(id);

    return response.json(oneClass);
  }
}

export { GetClassController };
