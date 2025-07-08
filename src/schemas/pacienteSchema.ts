import Joi from 'joi';

export const pacienteCrearSchema = Joi.object({
  nombres: Joi.string().max(120).required()
    .messages({
      'string.base': 'El nombre debe ser texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 120 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),
  apellidos: Joi.string().max(100).required()
    .messages({
      'string.base': 'Los apellidos deben ser texto.',
      'string.empty': 'Los apellidos son obligatorios.',
      'string.max': 'Los apellidos no deben exceder los 100 caracteres.',
      'any.required': 'Los apellidos son obligatorios.',
    }),
  edad: Joi.number().integer().positive().optional()
    .messages({
      'number.base': 'La edad debe ser un número.',
      'number.integer': 'La edad debe ser un número entero.',
      'number.positive': 'La edad debe ser un número positivo.',
    }),
  fecha_nacimiento: Joi.date().iso().optional()
    .messages({
      'date.base': 'La fecha de nacimiento debe ser válida.',
      'date.format': 'La fecha debe estar en formato ISO (YYYY-MM-DD).',
    }),
  id_tipo_documento: Joi.number().integer().required()
    .messages({
      'any.required': 'El tipo de documento es obligatorio.',
      'number.base': 'El tipo de documento debe ser un número entero.',
    }),
  numero_documento: Joi.string().max(20).required()
    .messages({
      'string.base': 'El número de documento debe ser texto.',
      'string.empty': 'El número de documento es obligatorio.',
      'string.max': 'El número de documento no debe exceder los 20 caracteres.',
      'any.required': 'El número de documento es obligatorio.',
    }),
  direccion: Joi.string().optional()
    .messages({
      'string.base': 'La dirección debe ser texto.',
    }),
  correo: Joi.string().email().max(100).optional()
    .messages({
      'string.email': 'El correo debe tener un formato válido.',
      'string.max': 'El correo no debe exceder los 100 caracteres.',
    }),
  genero: Joi.string().valid('M', 'F').required()
    .messages({
      'any.only': 'El género debe ser "M" (masculino) o "F" (femenino).',
      'string.empty': 'El género es obligatorio.',
      'any.required': 'El género es obligatorio.',
    }),
});