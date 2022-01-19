import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClass } from "../../interfaces/IClass";
import { IClassesRepository } from "../../repositories/IClassesRepository";
import { GetClassError } from "./GetClassError";

@injectable()
class GetClassUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute(id: string): Promise<IClass> {
    const oneClass = await this.classesRepository.findById(id);

    if (!oneClass) {
      throw new GetClassError();
    }

    return oneClass;
  }
}

export { GetClassUseCase };
