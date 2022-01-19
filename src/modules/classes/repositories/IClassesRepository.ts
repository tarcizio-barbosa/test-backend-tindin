import { IClass } from "../interfaces/IClass";

interface IClassesRepository {
  create(data: IClass): Promise<IClass>;
  list(): Promise<IClass[]>;
}

export { IClassesRepository };
