import BaseRoutes from "./BaseRouter";
import { auth } from "../middlewares/AuthMiddleware";
import TodoController from "../controllers/TodoController";
import validate from "../middlewares/AuthValidator";

class TodoRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", auth, TodoController.index);
        this.router.post("/", auth, validate, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, validate, TodoController.update);
        this.router.delete("/:id", auth, TodoController.delete);
    }
}

export default new TodoRoutes().router;