import {Router} from 'express';
import { actualizarProveedor, darBajaProveedor, insertarProveedor, listarProveedor, obtenerProveedor } from '../controllers/proveedor.controller';

const router: Router = Router();

router.post('/',insertarProveedor);
router.get('/',listarProveedor);
router.get('/:id_proveedor',obtenerProveedor);
router.put('/:id_proveedor',actualizarProveedor);
router.delete('/:id_proveedor',darBajaProveedor);

export default router;