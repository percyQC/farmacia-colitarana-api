import { Request, Response } from 'express'; 
import * as proveedorService from '../services/proveedor.service';
import { Proveedor } from '../entities/proveedor';

export const insertarProveedor = async (req: Request, res: Response) => {
    try {
        console.log('insertarProveedor')
        console.log('req.body',req.body)
        const proveedor: Partial<Proveedor> = req.body;
        const newProveedor: Proveedor = await proveedorService.insertarProveedor(proveedor)
        res.json(newProveedor);
    } catch (error) {
        res.jsonp(error);
    }  
    
}

export const listarProveedor = async (req: Request, res: Response)=>{
    const response = proveedorService.listarProveedor();
    res.json (response);
}

export const obtenerProveedor = async (req: Request, res: Response)=>{
    const {id_proveedor} = req.params;    
    const response = proveedorService.obtenerProveedor(Number(id_proveedor));
    res.json (response);
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

