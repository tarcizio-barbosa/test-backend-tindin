import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClass } from "../../interfaces/IClass";
import { IClassesRepository } from "../../repositories/IClassesRepository";

@injectable()
class ListClassesUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}
  async execute(): Promise<IClass[]> {
    const classes = await this.classesRepository.list();

    return classes;
  }
}

export { ListClassesUseCase };
