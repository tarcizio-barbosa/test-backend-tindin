import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClassUseCase } from "./CreateClassUseCase";

class CreateClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, video, date_init, date_end } = request.body;

    const createClassUseCase = container.resolve(CreateClassUseCase);

    const newClass = await createClassUseCase.execute({
      name,
      description,
      video,
      date_init,
      date_end,
    });

    return response.status(201).json(newClass);
  }
}

export { CreateClassController };
