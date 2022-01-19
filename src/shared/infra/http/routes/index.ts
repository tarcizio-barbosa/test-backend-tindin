import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/classes", classesRoutes);

export { router };
