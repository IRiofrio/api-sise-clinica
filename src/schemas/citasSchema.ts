import Joi from "joi";

export const citaCrearSchema = Joi.object({
    id_paciente: Joi.number().integer().required()
    .messages({
        'any.required': 'El id del paciente es obligatorio',
        'number.base': 'El id del paciente debe ser un numero entero',
        'number.integer': 'El id del paciente debe ser un numero entero'
    }),
    id_medico: Joi.number().integer().required()
    .messages({
        'any.required': 'El id del medico es obligatorio',
        'number.base': 'El id del médico debe ser un número entero.',
        'number.integer': 'El id del médico debe ser un número entero.'
    }),
    fecha: Joi.date().iso().required()
    .messages({
      'any.required': 'La fecha es obligatoria.',
      'date.base': 'La fecha debe tener un formato válido.',
      'date.format': 'La fecha debe estar en formato ISO (YYYY-MM-DD).',
    }),
    hora: Joi.string().pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).required()
    .messages({
      'any.required': 'La hora es obligatoria.',
      'string.base': 'La hora debe ser un texto con formato HH:mm o HH:mm:ss.',
      'string.pattern.base': 'La hora debe estar en formato HH:mm o HH:mm:ss.',
    })
})
 



