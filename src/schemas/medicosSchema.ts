import Joi from 'joi';

export const medicoCrearSchema = Joi.object({
  nombres: Joi.string().max(100).required()
    .messages({
      'string.base': 'El nombre debe ser un texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),
  apellidos: Joi.string().max(100).required()
    .messages({
      'string.base': 'Los apellidos deben ser texto.',
      'string.empty': 'Los apellidos son obligatorios.',
      'string.max': 'Los apellidos no deben exceder los 100 caracteres.',
      'any.required': 'Los apellidos son obligatorios.',
    }),
  correo: Joi.string().email().max(100).optional()
    .messages({
      'string.email': 'El correo debe tener un formato válido.',
      'string.max': 'El correo no debe exceder los 100 caracteres.',
    }),
  celular: Joi.string().max(20).optional()
    .messages({
      'string.max': 'El celular no debe exceder los 20 caracteres.',
    }),
  id_especialidad: Joi.number().integer().required()
    .messages({
      'number.base': 'El id de especialidad debe ser un número entero.',
      'any.required': 'El id de especialidad es obligatorio.',
    }),
});