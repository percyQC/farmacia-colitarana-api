import { AppDataSource } from "../config/db.config";
import { Proveedor } from "../entities/proveedor";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Proveedor);

export const insertarProveedor = async (data: Partial<Proveedor>): Promise<Proveedor>  => {
    const newProveedor: Proveedor = await repository.save(data);
    return await repository.findOne({where: {idProveedor: newProveedor.idProveedor}});    
}

export const listarProveedor = async (): Promise<Proveedor[]> =>{
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const obtenerProveedor = async (idProveedor: number ) : Promise<Proveedor> => {
    return await repository.findOne({ where: { idProveedor , estadoAuditoria: EstadoAuditoria.ACTIVO } });  
}

export const actualizarProveedor = (idProveedor: number, data: any) => {
    return {accion:`actualizarProveedor:${idProveedor}`};
}

export const darBajaProveedor = (idProveedor: number) => {
    return {accion:`darBajaProveedor:${idProveedor}`};
}
