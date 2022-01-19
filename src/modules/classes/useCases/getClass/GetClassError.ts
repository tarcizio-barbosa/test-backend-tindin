import { AppError } from "../../../../shared/errors/AppError";

class GetClassError extends AppError {
  constructor() {
    super("Class not found", 404);
  }
}

export { GetClassError };
