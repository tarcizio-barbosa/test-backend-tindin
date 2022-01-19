import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { ListClassesUseCase } from "../listClasses/ListClassesUseCase";
import { DeleteClassUseCase } from "./DeleteClassUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;
let deleteClassUseCase: DeleteClassUseCase;
let listClassesUseCase: ListClassesUseCase;

describe("Delete a Class", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
    deleteClassUseCase = new DeleteClassUseCase(inMemoryClassesRepository);
    listClassesUseCase = new ListClassesUseCase(inMemoryClassesRepository);
  });

  it("Should be able to delete one Class", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    await createClassUseCase.execute({
      name: "O que é o CDI?",
      description: "Vídeo que explica em detalhes o que é o CDI",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    await deleteClassUseCase.execute(newClass.id);

    const oneClassOnly = await listClassesUseCase.execute();

    expect(oneClassOnly.length).toBe(1);
  });
});
