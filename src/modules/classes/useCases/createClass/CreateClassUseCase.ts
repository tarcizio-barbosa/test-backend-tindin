import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClass } from "../../interfaces/IClass";
import { IClassesRepository } from "../../repositories/IClassesRepository";

@injectable()
class CreateClassUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}
  async execute({
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const newClass = await this.classesRepository.create({
      name,
      description,
      video,
      date_init,
      date_end,
    });

    return newClass;
  }
}

export { CreateClassUseCase };
