import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";
import { GetClassError } from "../getClass/GetClassError";

@injectable()
class DeleteClassUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}
  async execute(id: string): Promise<void> {
    const oneClass = await this.classesRepository.findById(id);

    if (!oneClass) {
      throw new GetClassError();
    }

    await this.classesRepository.deleteClass(id);
  }
}

export { DeleteClassUseCase };
