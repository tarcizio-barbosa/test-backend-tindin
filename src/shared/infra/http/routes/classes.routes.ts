import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";
import { DeleteClassController } from "../../../../modules/classes/useCases/deleteClass/DeleteClassController";
import { GetClassController } from "../../../../modules/classes/useCases/getClass/GetClassController";
import { ListClassesController } from "../../../../modules/classes/useCases/listClasses/ListClassesController";
import { UpdateClassController } from "../../../../modules/classes/useCases/updateClass/UpdateClassController";

const classesRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();
const getClassController = new GetClassController();
const updateClassController = new UpdateClassController();
const deleteClassController = new DeleteClassController();

classesRoutes.post("/", createClassController.handle);
classesRoutes.get("/", listClassesController.handle);
classesRoutes.get("/:id", getClassController.handle);
classesRoutes.put("/:id", updateClassController.handle);
classesRoutes.delete("/:id", deleteClassController.handle);

export { classesRoutes };
