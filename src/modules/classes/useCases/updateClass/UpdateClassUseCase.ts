import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IClass } from "../../interfaces/IClass";
import { IClassesRepository } from "../../repositories/IClassesRepository";
import { GetClassError } from "../getClass/GetClassError";

@injectable()
class UpdateClassUseCase {
  constructor(
    @inject("ClassesRepository")
    private classRepository: IClassesRepository
  ) {}

  async execute({
    id,
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const oneClass = await this.classRepository.findById(id);

    if (!oneClass) {
      throw new GetClassError();
    }

    const updatedClass = await this.classRepository.updateClass({
      id,
      name,
      description,
      video,
      date_init,
      date_end,
    });

    return updatedClass;
  }
}

export { UpdateClassUseCase };
