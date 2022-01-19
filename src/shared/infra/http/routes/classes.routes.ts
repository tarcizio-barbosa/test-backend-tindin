import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";
import { ListClassesController } from "../../../../modules/classes/useCases/listClasses/ListClassesController";

const classesRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();

classesRoutes.post("/", createClassController.handle);
classesRoutes.get("/", listClassesController.handle);

export { classesRoutes };
