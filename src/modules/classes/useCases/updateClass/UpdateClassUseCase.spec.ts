import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { UpdateClassUseCase } from "./UpdateClassUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;
let updateClassUseCase: UpdateClassUseCase;

describe("Update a Class", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
    updateClassUseCase = new UpdateClassUseCase(inMemoryClassesRepository);
  });

  it("Should be able to update a Class", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    const updatedClass = await updateClassUseCase.execute({
      id: newClass.id,
      name: "O que é Juros Compostos",
      description: "Vídeo que mostra o cálculo dos juros compostos",
      video: newClass.video,
      date_init: newClass.date_init,
      date_end: newClass.date_end,
    });

    expect(updatedClass.name).toBe("O que é Juros Compostos");
    expect(updatedClass.video).toEqual(newClass.video);
  });
});
