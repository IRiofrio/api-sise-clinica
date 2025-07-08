import Joi from 'joi';

export const horarioCrearSchema = Joi.object({
  id_medico: Joi.number().integer().required()
    .messages({
      'any.required': 'El ID del médico es obligatorio.',
      'number.base': 'El ID del médico debe ser un número entero.',
    }),

  dia_semana: Joi.string().valid('1', '2', '3', '4', '5', '6', '7').required()
    .messages({
      'any.only': 'El día de la semana debe estar entre "1" (lunes) y "7" (domingo).',
      'any.required': 'El día de la semana es obligatorio.',
    }),

  hora_inicio: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
    .messages({
      'string.pattern.base': 'La hora de inicio debe tener el formato HH:mm.',
      'any.required': 'La hora de inicio es obligatoria.',
    }),

  hora_fin: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
    .messages({
      'string.pattern.base': 'La hora de fin debe tener el formato HH:mm.',
      'any.required': 'La hora de fin es obligatoria.',
    }),
});