import { IComment } from "../interfaces/IComment";

interface ICommentsRepository {
  create(data: IComment): Promise<IComment>;
  list(): Promise<IComment[]>;
  deleteComment(id: string): Promise<void>;
  findById(id: string): Promise<IComment>;
}

export { ICommentsRepository };
