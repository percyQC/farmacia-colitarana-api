export const insertarProveedor = (data: any) =>{
    return {accion:'insertarProveedor'};    
}

export const listarProveedor = () =>{
    return {accion:'listarProveedor'};    
}

export const obtenerProveedor = (id_proveedor: number) =>{
    return {accion:`obtenerProveedor:${id_proveedor}`};    
}

export const actualizarProveedor = (id_proveedor: number, data: any) => {
    return {accion:`actualizarProveedor:${id_proveedor}`};
}

export const darBajaProveedor = (id_proveedor: number) => {
    return {accion:`darBajaProveedor:${id_proveedor}`};
}
