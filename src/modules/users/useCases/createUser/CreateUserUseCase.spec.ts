import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository";
import { CreateUserError } from "./CreateUserError";
import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });
  it("Should not be able to create a new User with the same e-mail", () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "Tarcizio One",
        email: "tarcizio@io.com.br",
        password: "k9sonwow11",
      });

      await createUserUseCase.execute({
        name: "Tarcizio Two",
        email: "tarcizio@io.com.br",
        password: "k9sonwow11",
      });
    }).rejects.toBeInstanceOf(CreateUserError);
  });
});
