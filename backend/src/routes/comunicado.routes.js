import { Router } from "express";
import {
  createComunicado,
  getComunicados,
  getComunicadoById,
  updateComunicadoById,
  deleteComunicadoById,
} from "../controllers/comunicado.controller.js";
import { authenticateJwt } from "../middleware/authentication.middleware.js";
import { isAdmin } from "../middleware/authorization.middleware.js";

const router = Router();

router.use(authenticateJwt);

router.post("/", isAdmin, createComunicado); 
router.put("/:id", isAdmin, updateComunicadoById);
router.delete("/:id", isAdmin, deleteComunicadoById);


router.get("/", getComunicados);
router.get("/:id", getComunicadoById);

export default router;
