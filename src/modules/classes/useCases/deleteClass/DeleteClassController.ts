import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteClassUseCase } from "./DeleteClassUseCase";

class DeleteClassController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClassUseCase = container.resolve(DeleteClassUseCase);

    await deleteClassUseCase.execute(id);

    return response.json({ message: "The Class has been deleted!" });
  }
}

export { DeleteClassController };
