// taskRoutes.ts - CONNECTS ENDPOINTS TO CONTROLLER FUNCTIONS
// All paths starts with /api/tasks (see app.ts)
// This follows RESTAPI

import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  updateTasks,
} from "../controllers/taskController";
import { validateId } from "../middleware/validated";

const router = Router();

router.post("/", createTask);
router.get("/alltasks", getAllTask);

// validatedId runs first; the controller only runs if the id is valid
router.patch("/:id", validateId, updateTasks);
router.delete("/:id", validateId, deleteTask);
router.get("/:id", validateId, getTaskById);

export default router;
