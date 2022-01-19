import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { ListClassesUseCase } from "./ListClassesUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;
let listClassesUseCase: ListClassesUseCase;

describe("List All Classes", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
    listClassesUseCase = new ListClassesUseCase(inMemoryClassesRepository);
  });

  it("Should be able to list all Classes", async () => {
    await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    const allClasses = await listClassesUseCase.execute();

    expect(allClasses.length).toBe(2);
  });
});
