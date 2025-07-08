import Joi from 'joi';

export const tipoDocumentoCrearSchema = Joi.object({
  nombre: Joi.string().max(50).required()
    .messages({
      'string.base': 'El nombre debe ser texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 50 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),
});