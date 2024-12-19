import { Router } from "express";
import { actualizarMedicamento, darBajaMedicamento, insertarMedicamento, listarMedicamentos, obtenerMedicamento } from "../controllers/medicamento.controller";


const router: Router = Router();

router.post('/',insertarMedicamento);
router.get('/',listarMedicamentos);
router.get('/:idMedicamento',obtenerMedicamento);
router.put('/:idMedicamento',actualizarMedicamento);
router.delete('/:idMedicamento',darBajaMedicamento);

export default router;