import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { CreateClassUseCase } from "./CreateClassUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;

describe("Create Class", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
  });

  it("Should be able to create a new Class", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    expect(newClass).toHaveProperty("id");
  });
});
