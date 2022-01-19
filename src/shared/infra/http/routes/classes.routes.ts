import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";
import { GetClassController } from "../../../../modules/classes/useCases/getClass/GetClassController";
import { ListClassesController } from "../../../../modules/classes/useCases/listClasses/ListClassesController";

const classesRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();
const getClassController = new GetClassController();

classesRoutes.post("/", createClassController.handle);
classesRoutes.get("/", listClassesController.handle);
classesRoutes.get("/:id", getClassController.handle);

export { classesRoutes };
