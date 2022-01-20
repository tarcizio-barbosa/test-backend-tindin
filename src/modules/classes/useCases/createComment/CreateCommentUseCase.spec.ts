import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { InMemoryCommentsRepository } from "../../repositories/inMemory/InMemoryCommentsRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let inMemoryCommentsRepository: InMemoryCommentsRepository;
let createClassUseCase: CreateClassUseCase;
let createCommentUseCase: CreateCommentUseCase;

describe("Create a Comment Class", () => {
  const addOneDay = dayjs().add(1, "day").toDate();

  const addSevenDays = dayjs().add(7, "day").toDate();

  beforeEach(() => {
    inMemoryClassesRepository = new InMemoryClassesRepository();
    inMemoryCommentsRepository = new InMemoryCommentsRepository();
    createClassUseCase = new CreateClassUseCase(inMemoryClassesRepository);
    createCommentUseCase = new CreateCommentUseCase(
      inMemoryCommentsRepository,
      inMemoryClassesRepository
    );
  });

  it("Should be able to create a new comment", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    const newComment = await createCommentUseCase.execute({
      id_class: newClass.id,
      comment: "Eu simplesmente adore esse vídeo!",
    });

    console.log(newClass);

    expect(newComment).toHaveProperty("id");
    expect(newClass.comments.length).toBe(1);
  });
});
