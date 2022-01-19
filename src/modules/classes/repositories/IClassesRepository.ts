import { IClass } from "../interfaces/IClass";

interface IClassesRepository {
  create(data: IClass): Promise<IClass>;
  list(): Promise<IClass[]>;
  findById(id: string): Promise<IClass>;
}

export { IClassesRepository };
