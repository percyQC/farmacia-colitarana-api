import { Medicamento } from "../entities/medicamento";
import { AppDataSource } from "../config/db.config";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Medicamento);

export const insertarMedicamento = async (data: Partial<Medicamento>): Promise<Medicamento>=>{
    const newMedicamento: Medicamento = await repository.save(data);
    return await repository.findOne({where: {idMedicamento: newMedicamento.idMedicamento}}); 

}

export const listarMedicamentos = async (): Promise<Medicamento[]> =>{
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['medicamentoCategoria']
    });
}

export const obtenerMedicamento= async (idMedicamento: number ) : Promise<Medicamento> => {
    return await repository.findOne({ where: { idMedicamento , estadoAuditoria: EstadoAuditoria.ACTIVO } });  
}

export const actualizarMedicamento = async (idMedicamento: number, data: Partial<Medicamento>) => {
    await repository.update(idMedicamento,data);
    return obtenerMedicamento(idMedicamento);
}
export const darBajaMedicamento = async (idMedicamento: number): Promise<void> => {
    await repository.update(idMedicamento, { estadoAuditoria: EstadoAuditoria.INACTIVO });
    
}