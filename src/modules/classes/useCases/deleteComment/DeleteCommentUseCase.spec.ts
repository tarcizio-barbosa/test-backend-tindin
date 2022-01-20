import dayjs from "dayjs";

import { InMemoryClassesRepository } from "../../repositories/inMemory/InMemoryClassesRepository";
import { InMemoryCommentsRepository } from "../../repositories/inMemory/InMemoryCommentsRepository";
import { CreateClassUseCase } from "../createClass/CreateClassUseCase";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

let inMemoryClassesRepository: InMemoryClassesRepository;
let createClassUseCase: CreateClassUseCase;
let inMemoryCommentsRepository: InMemoryCommentsRepository;
let createCommentUseCase: CreateCommentUseCase;
let deleteCommentUseCase: DeleteCommentUseCase;

describe("Delete a Comment", () => {
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
    deleteCommentUseCase = new DeleteCommentUseCase(
      inMemoryCommentsRepository,
      inMemoryClassesRepository
    );
  });

  it("Should be able to delete a class Comment", async () => {
    const newClass = await createClassUseCase.execute({
      name: "O que é a SELIC?",
      description: "Vídeo que explica em detalhes o que é a SELIC",
      video: "https://www.youtube.com/watch?v=lGsPhiNvXAM",
      date_init: addOneDay,
      date_end: addSevenDays,
    });

    const newComment = await createCommentUseCase.execute({
      id_class: newClass.id,
      comment: "Comment One",
    });

    await createCommentUseCase.execute({
      id_class: newClass.id,
      comment: "Comment Two",
    });

    await deleteCommentUseCase.execute(newComment.id);

    expect(newClass.comments.length).toBe(1);
  });
});
