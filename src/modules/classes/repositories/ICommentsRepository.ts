import { IComment } from "../interfaces/IComment";

interface ICommentsRepository {
  create(data: IComment): Promise<IComment>;
  list(): Promise<IComment[]>;
}

export { ICommentsRepository };
