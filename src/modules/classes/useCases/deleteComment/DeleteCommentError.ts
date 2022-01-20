import { AppError } from "../../../../shared/errors/AppError";

class DeleCommentError extends AppError {
  constructor() {
    super("Comment not found", 404);
  }
}

export { DeleCommentError };
