import { model, Model } from "mongoose";

import { IClass } from "../../../interfaces/IClass";
import { IComment } from "../../../interfaces/IComment";
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

  async list(): Promise<IClass[]> {
    return this.Repository.find({});
  }

  async findById(id: string): Promise<IClass> {
    const oneClass = await this.Repository.findOne({ id });

    return oneClass;
  }

  async updateClass({
    id,
    name,
    description,
    video,
    date_init,
    date_end,
  }: IClass): Promise<IClass> {
    const updatedClass = await this.Repository.findOneAndUpdate(
      { id },
      {
        name,
        description,
        video,
        date_init,
        date_end,
      }
    );

    return updatedClass;
  }

  async deleteClass(id: string): Promise<void> {
    await this.Repository.findOneAndDelete({ id });
  }

  async addComments(id: string, { comment }: IComment): Promise<IClass> {
    const oneClass = await this.Repository.findOne({ id });

    oneClass.comments = [{ comment }];

    const commentAdded = await oneClass.save();

    return commentAdded;
  }
}

export { ClassesRepository };
