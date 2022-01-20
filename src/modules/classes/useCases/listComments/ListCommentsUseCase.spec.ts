import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { InMemoryCommentsRepository } from "../../repositories/inMemory/InMemoryCommentsRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { ListCommentsUseCase } from "./ListCommentsUseCase";

let inMemoryCommentsRepository: InMemoryCommentsRepository;
let inMemoryClassesRepository: InMemoryClassesRepository;
let createCommentUseCase: CreateCommentUseCase;
let createClassUseCase: CreateClassUseCase;
let listCommentsUseCase: ListCommentsUseCase;

describe("List All Comments", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  inMemoryClassesRepository = new InMemoryClassesRepository();
  inMemoryCommentsRepository = new InMemoryCommentsRepository();
  createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
  createCommentUseCase = new CreateCommentUseCase(
    inMemoryCommentsRepository,
    inMemoryClassesRepository
  );
  listCommentsUseCase = new ListCommentsUseCase(inMemoryCommentsRepository);

  it("Should be able to list all class's Comments", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    await createCommentUseCase.execute({
      comment: "Adorei o vídeo sobre a SELIC",
      id_class: newClass.id,
    });

    const allComments = await listCommentsUseCase.execute();

    expect(allComments.length).toBe(1);
  });
});
