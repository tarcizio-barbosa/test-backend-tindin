import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";
import { CreateCommentController } from "../../../../modules/classes/useCases/createComment/CreateCommentController";
import { DeleteClassController } from "../../../../modules/classes/useCases/deleteClass/DeleteClassController";
import { DeleteCommentController } from "../../../../modules/classes/useCases/deleteComment/DeleteCommentController";
import { GetClassController } from "../../../../modules/classes/useCases/getClass/GetClassController";
import { ListClassesController } from "../../../../modules/classes/useCases/listClasses/ListClassesController";
import { ListCommentsController } from "../../../../modules/classes/useCases/listComments/ListCommentsController";
import { UpdateClassController } from "../../../../modules/classes/useCases/updateClass/UpdateClassController";

const classesRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();
const getClassController = new GetClassController();
const updateClassController = new UpdateClassController();
const deleteClassController = new DeleteClassController();
const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();
const deleteCommentController = new DeleteCommentController();

classesRoutes.post("/", createClassController.handle);
classesRoutes.post("/comments", createCommentController.handle);
classesRoutes.get("/", listClassesController.handle);
classesRoutes.get("/comments", listCommentsController.handle);
classesRoutes.get("/:id", getClassController.handle);
classesRoutes.put("/:id", updateClassController.handle);
classesRoutes.delete("/:id", deleteClassController.handle);
classesRoutes.delete("/comments/:id", deleteCommentController.handle);

export { classesRoutes };
