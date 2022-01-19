import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { GetClassUseCase } from "./GetClassUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;
let getClassUseCase: GetClassUseCase;

describe("Get One Class", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
    getClassUseCase = new GetClassUseCase(inMemoryClassesRepository);
  });

  it("Should be able to list one Class", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    const selicClass = await getClassUseCase.execute(newClass.id);

    expect(selicClass).toHaveProperty("name");
    expect(selicClass.id).toEqual(newClass.id);
  });
});
