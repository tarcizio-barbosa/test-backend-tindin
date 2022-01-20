import { Class } from "../../infra/mongoose/schemas/Class";
import { IClass } from "../../interfaces/IClass";
import { IComment } from "../../interfaces/IComment";
import { IClassesRepository } from "../IClassesRepository";
import { InMemoryCommentsRepository } from "./InMemoryCommentsRepository";

class InMemoryClassesRepository implements IClassesRepository {
  private classes: Class[] = [];
  private inMemoryCommentsRepository: InMemoryCommentsRepository;

  constructor() {
    this.inMemoryCommentsRepository = new InMemoryCommentsRepository();
  }

  async create({
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const newClass = new Class();

    Object.assign(newClass, {
      name,
      description,
      video,
      date_init,
      date_end,
    });

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

  async deleteClass(id: string): Promise<void> {
    const oneClass = this.classes.findIndex((classById) => classById.id === id);

    this.classes.splice(oneClass, 1);
  }

  async addComments(id: string, { comment }: IComment): Promise<IClass> {
    const oneClass = this.classes.find((classById) => classById.id === id);

    const newComment = await this.inMemoryCommentsRepository.create({
      comment,
    });

    oneClass.comments.push(newComment);

    return oneClass;
  }
}

export { InMemoryClassesRepository };
