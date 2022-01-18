import { Class } from "../../infra/mongoose/schemas/Class";
import { IClass } from "../../interfaces/IClass";
import { IClassesRepository } from "../IClassesRepository";

class InMemoryClassesRepository implements IClassesRepository {
  private classes: Class[] = [];

  async create(data: IClass): Promise<IClass> {
    const newClass = new Class();

    Object.assign(newClass, data);

    this.classes.push(newClass);

    return newClass;
  }
}

export { InMemoryClassesRepository };
