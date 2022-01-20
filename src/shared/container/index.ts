import { container } from "tsyringe";

import { ClassesRepository } from "../../modules/classes/infra/mongoose/repositories/ClassesRepository";
import { CommentsRepository } from "../../modules/classes/infra/mongoose/repositories/CommentsRepository";
import { IClassesRepository } from "../../modules/classes/repositories/IClassesRepository";
import { ICommentsRepository } from "../../modules/classes/repositories/ICommentsRepository";
import { UsersRepository } from "../../modules/users/infra/mongoose/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClassesRepository>(
  "ClassesRepository",
  ClassesRepository
);

container.registerSingleton<ICommentsRepository>(
  "CommentsRepository",
  CommentsRepository
);
