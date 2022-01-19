import { Router } from "express";

import { CreateClassController } from "../../../../modules/classes/useCases/createClass/CreateClassController";

const classesRoutes = Router();

const createClassController = new CreateClassController();

classesRoutes.post("/", createClassController.handle);

export { classesRoutes };
