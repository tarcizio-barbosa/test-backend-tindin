import { IComment } from "../interfaces/IComment";

interface ICommentsRepository {
  create(data: IComment): Promise<IComment>;
}

export { ICommentsRepository };
