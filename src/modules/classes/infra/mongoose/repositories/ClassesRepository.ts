import { model, Model } from "mongoose";

import { IClass } from "../../../interfaces/IClass";
import { IClassesRepository } from "../../../repositories/IClassesRepository";
import { classSchema } from "../schemas/Class";

class ClassesRepository implements IClassesRepository {
  private Repository: Model<IClass>;

  constructor() {
    this.Repository = model<IClass>("Class", classSchema);
  }

  async create({
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const newClass = new this.Repository({
      name,
      description,
      video,
      date_init,
      date_end,
    });

    await newClass.save();

    return newClass;
  }
}

export { ClassesRepository };
