import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";
import { GetClassController } from "../../../../modules/classes/useCases/getClass/GetClassController";
import { ListClassesController } from "../../../../modules/classes/useCases/listClasses/ListClassesController";
import { UpdateClassController } from "../../../../modules/classes/useCases/updateClass/UpdateClassController";

const classesRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();
const getClassController = new GetClassController();
const updateClassController = new UpdateClassController();

classesRoutes.post("/", createClassController.handle);
classesRoutes.get("/", listClassesController.handle);
classesRoutes.get("/:id", getClassController.handle);
classesRoutes.put("/:id", updateClassController.handle);

export { classesRoutes };
