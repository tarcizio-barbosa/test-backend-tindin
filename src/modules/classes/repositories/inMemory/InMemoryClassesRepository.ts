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

  async list(): Promise<IClass[]> {
    const allClasses = this.classes;

    return allClasses;
  }

  async findById(id: string): Promise<IClass> {
    return this.classes.find((oneClass) => oneClass.id === id);
  }

  async updateClass({
    id,
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const oneClass = this.classes.find((classById) => classById.id === id);

    Object.assign(oneClass, { name, description, video, date_init, date_end });

    return oneClass;
  }
}

export { InMemoryClassesRepository };
