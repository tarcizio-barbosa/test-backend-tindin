import { IClass } from "../interfaces/IClass";
import { IComment } from "../interfaces/IComment";

interface IClassesRepository {
  create(data: IClass): Promise<IClass>;
  list(): Promise<IClass[]>;
  findById(id: string): Promise<IClass>;
  updateClass(data: IClass): Promise<IClass>;
  deleteClass(id: string): Promise<void>;
  addComments(id: string, dataComment: IComment): Promise<IClass>;
  removeComment(id: string, id_class: string): Promise<IClass>;
}

export { IClassesRepository };
