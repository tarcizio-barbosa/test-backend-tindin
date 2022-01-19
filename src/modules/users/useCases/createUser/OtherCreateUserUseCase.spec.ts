import {
  connectDB,
  closeDB,
  clearDB,
} from "../../../../shared/infra/mongoose/db";
import { UsersRepository } from "../../infra/mongoose/repositories/UsersRepository";
import { CreateUserError } from "./CreateUserError";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepository: UsersRepository;

describe("Create User", () => {
  beforeAll(async () => {
    await connectDB();
  });

  beforeEach(() => {
    usersRepository = new UsersRepository();
    createUserUseCase = new CreateUserUseCase(usersRepository);
  });

  // afterEach(async () => {
  //   await clearDB();
  // });

  afterAll(async () => {
    await closeDB();
  });

  it("Should not be able to create a new User with the same e-mail", () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "Tarcizio Barbosa",
        email: "tarcizio@io.com",
        password: "k9sonwow11",
      });

      await createUserUseCase.execute({
        name: "Tarcizio da Silva",
        email: "tarcizio@io.com",
        password: "k9sonwow11",
      });
    }).rejects.toBeInstanceOf(CreateUserError);
  });
});
