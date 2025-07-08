import Joi from 'joi';

export const especialidadCrearSchema = Joi.object({
  nombre: Joi.string().max(100).required()
    .messages({
      'string.base': 'El nombre debe ser un texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),
});