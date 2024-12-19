import { Request,Response }  from "express";
import { BaseResponse } from "../shared/base-response";
import { Message } from "../enums/message";
import { Medicamento } from "../entities/medicamento";
import * as medicamentoService from '../services/medicamento.service';


export const insertarMedicamento = async (req: Request, res: Response) => {
    try {
        console.log('insertarMedicamento');
        const medicamento: Partial <Medicamento> = req.body;
        const newMedicamento: Medicamento = await medicamentoService.insertarMedicamento(medicamento);
        res.json(BaseResponse.success(newMedicamento,Message.INSERTADO_OK));
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}

export const listarMedicamentos = async (req: Request, res: Response) => {
    try {
        console.log('listarMedicamentos');
        const medicamentos: Medicamento[] = await medicamentoService.listarMedicamentos();
        res.json(BaseResponse.success(medicamentos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}
export const obtenerMedicamento = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}
export const actualizarMedicamento = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}
export const darBajaMedicamento = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}