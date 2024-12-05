import { Request, Response } from 'express'; 

export const insertarProveedor = async (req: Request, res: Response)=>{
    res.json ({accion:'insertarProveedor'});
}

export const listarProveedor = async (req: Request, res: Response)=>{
    res.json ({accion:'listarProveedor'});
}

export const obtenerProveedor = async (req: Request, res: Response)=>{
    res.json ({accion:'obtenerProveedor'});
}

export const actualizarProveedor = async (req: Request, res: Response)=>{
    res.json ({accion:'actualizarProveedor'});
}

export const darBajaProveedor = async (req: Request, res: Response)=>{
    res.json ({accion:'darBajaProveedor'});
}