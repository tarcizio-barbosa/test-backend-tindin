import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateClassUseCase } from "./UpdateClassUseCase";

class UpdateClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, description, video, date_init, date_end } = request.body;

    const updateClassUseCase = container.resolve(UpdateClassUseCase);

    const updatedClass = await updateClassUseCase.execute({
      id,
      name,
      description,
      video,
      date_init,
      date_end,
    });

    return response.json(updatedClass);
  }
}

export { UpdateClassController };
