import Joi from "joi";

export const insertarProveedorSchema = Joi.object({
    razonSocial: Joi.string()
                    .min(3)
                    .max(200)
                    .required(),
    tipoDocumento: Joi.string()
                        .min(1)
                        .max(1)
                        .valid('R','D','C')
                        .required(),
    numeroDocumento: Joi.string()
                        .min(8)
                        .max(15)
                        .pattern(new RegExp('^[0-9]{8,15}$'))
                        .required(),
    telefono: Joi.string()
                .min(9)
                .max(20)
                .optional(),
    correo: Joi.string()
                .email()
                .min(3)
                .max(100),
    direccion: Joi.string()
                .min(3)
                .max(500)
                .optional()   

});

export const actualizarProveedorSchema = Joi.object({
    razonSocial: Joi.string()
                    .min(3)
                    .max(200)
                    .optional(),
    tipoDocumento: Joi.string()
                        .min(1)
                        .max(1)
                        .valid('R','D','C')
                        .optional(),
    numeroDocumento: Joi.string()
                        .min(8)
                        .max(15)
                        .pattern(new RegExp('^[0-9]{8,15}$'))
                        .optional(),
    telefono: Joi.string()
                .min(9)
                .max(20)
                .optional(),
    correo: Joi.string()
                .email()
                .min(3)
                .max(100),
    direccion: Joi.string()
                .min(3)
                .max(500)
                .optional()   
});