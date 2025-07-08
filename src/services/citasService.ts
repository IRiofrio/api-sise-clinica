import { PrismaClient } from "@prisma/client";
import { Cita } from "../models/cita";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const listarCitas = async () => {
  console.log('citasService::listarCitas');
  return await prisma.citas.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_cita: 'asc'
    }
  });
}

export const obtenerCita = async (id: number) => {
  console.log('citasService::obtenerCita');
  return await prisma.citas.findUnique({
    where: {
      id_cita: id
    }
  });
}

export const insertarCita = async (cita: Cita) => {
  console.log('citasService::insertarCita');
  const fecha = new Date(cita.fecha); // Solo la fecha (la hora se ignora)
  const hora = new Date(`1970-01-01T${cita.hora}:00Z`); // Solo la hora válida para @db.Time
  await prisma.citas.create({
    data: {
      id_paciente: cita.id_paciente,
      id_medico: cita.id_medico,
      fecha,
      hora
    }
  });
  return RESPONSE_INSERT_OK;
}

export const modificarCita = async (id: number, cita: Cita) => {
  console.log('citasService::modificarCita');
  await prisma.citas.update({
    where: {
      id_cita: id
    },
    data: {
      id_paciente: cita.id_paciente,
      id_medico: cita.id_medico,
      fecha: cita.fecha,
      hora: cita.hora,
      estado_cita: cita.estado_cita,
      estado_auditoria: cita.estado_auditoria,
      fecha_actualizacion: new Date()
    }
  });

  return RESPONSE_UPDATE_OK;
}

export const eliminarCita = async (id: number) => {
  console.log('citasService::eliminarCita');
  await prisma.citas.update({
    where: {
      id_cita: id
    },
    data: {
      estado_auditoria: '0'
    }
  });

  return RESPONSE_INSERT_OK;
}
