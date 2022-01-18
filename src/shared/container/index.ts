import { container } from "tsyringe";

import { ClassesRepository } from "../../modules/classes/infra/mongoose/repositories/ClassesRepository";
import { IClassesRepository } from "../../modules/classes/repositories/IClassesRepository";
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
