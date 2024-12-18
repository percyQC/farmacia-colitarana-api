import { Request, Response } from 'express'; 
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';
import { BaseResponse } from '../shared/base-response';

export const insertarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('insertarProveedor')
        const proveedor: Partial<Proveedor> = req.body;
        const newProveedor: Proveedor = await proveedorService.insertarProveedor(proveedor)
        res.json(BaseResponse.success(newProveedor));
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
        res.json(BaseResponse.success(proveedor));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const actualizarProveedor = async (req: Request, res: Response)=>{
    const { idProveedor } = req.params;
    const proveedor = req.body;
    const response = proveedorService.actualizarProveedor(Number(idProveedor),proveedor)
    res.json(response);
}

export const darBajaProveedor = async (req: Request, res: Response)=>{
    const { idProveedor } = req.params;
    const response = proveedorService.darBajaProveedor(Number(idProveedor));
    res.json(response);
}

