import { IClass } from "../interfaces/IClass";

interface IClassesRepository {
  create(data: IClass): Promise<IClass>;
}

export { IClassesRepository };
