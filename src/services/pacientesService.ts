import { pacientes, PrismaClient } from "@prisma/client";
import { Paciente } from '../models/paciente';
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPaciente, toPrismaPaciente } from '../mappers/paciente.mapper';

const prisma = new PrismaClient();

export const listarPacientes = async () => {
  console.log('pacientesService::listarPacientes');
  const paciente: pacientes[] = await prisma.pacientes.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_paciente: 'asc'
    }
  });
  return paciente.map((paciente: pacientes) => fromPrismaPaciente(paciente));
}

export const obtenerPaciente = async (id: number) => {
  console.log('pacientesService::obtenerPaciente');
  const paciente: pacientes | null = await prisma.pacientes.findUnique({
    where: {
      id_paciente: id
    }
  });
  return paciente ? fromPrismaPaciente(paciente) : null;
}

export const insertarPaciente = async (paciente: Paciente) => {
  console.log('pacientesService::insertarPaciente');
  await prisma.pacientes.create({
    data: toPrismaPaciente(paciente)
  });
  return RESPONSE_INSERT_OK;
}

export const modificarPaciente = async (id: number, paciente: Paciente) => {
  console.log('pacientesService::modificarPaciente');
  const dataActualizada = {...paciente,fechaActualizacion: new Date()}
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: toPrismaPaciente(dataActualizada)
  });
  return RESPONSE_UPDATE_OK;
}

export const eliminarPaciente = async (id: number) => {
  console.log('pacientesService::eliminarPaciente');
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_DELETE_OK;
}
