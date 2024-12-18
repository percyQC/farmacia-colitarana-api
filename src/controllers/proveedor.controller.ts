import { Request, Response } from 'express'; 
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/message';

export const insertarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('insertarProveedor')
        const proveedor: Partial<Proveedor> = req.body;
        const newProveedor: Proveedor = await proveedorService.insertarProveedor(proveedor)
        res.json(BaseResponse.success(newProveedor,Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}

export const listarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('listarProveedor');
        const proveedores: Proveedor[] = await proveedorService.listarProveedor();        
        res.json(BaseResponse.success(proveedores));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const obtenerProveedor = async (req: Request, res: Response)=>{
    try {
        console.log('obtenerProveedor');
        const {idProveedor} = req.params;    
        const proveedor: Proveedor = await proveedorService.obtenerProveedor(Number(idProveedor));
        if(!proveedor){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(proveedor));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const actualizarProveedor = async (req: Request, res: Response)=>{
    try {
        const { idProveedor } = req.params;
        const proveedor: Partial<Proveedor> = req.body;
        if(!(await proveedorService.obtenerProveedor(Number(idProveedor)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateProveedor: Proveedor = await proveedorService.actualizarProveedor(Number(idProveedor),proveedor)
        res.json(BaseResponse.success(updateProveedor,Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const darBajaProveedor = async (req: Request, res: Response)=>{
    try {
        console.log('darBajaProveedor');
        const { idProveedor } = req.params;
        if(!(await proveedorService.obtenerProveedor(Number(idProveedor)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }        
        await proveedorService.darBajaProveedor(Number(idProveedor));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

