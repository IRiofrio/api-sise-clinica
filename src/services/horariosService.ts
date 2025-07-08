import { PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { Horario } from "../models/horario"; // Suponiendo que tienes este modelo en la carpeta models

const prisma = new PrismaClient();

export const listarHorarios = async () => {
    console.log('horariosService::listarHorarios');
    const horarios = await prisma.horarios.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_horario: 'asc'
        }
    });

    return horarios;
}

export const obtenerHorario = async (id: number) => {
    console.log('horariosService::obtenerHorario');
    const horario = await prisma.horarios.findUnique({
        where: {
            id_horario: id
        }
    });

    return horario;
}

export const insertarHorario = async (horario: Horario) => {
    console.log('horariosService::insertarHorario');
    await prisma.horarios.create({
        data: {
            id_medico: horario.id_medico,
            dia_semana: horario.dia_semana,
            hora_inicio: horario.hora_inicio,
            hora_fin: horario.hora_fin
        }
    });
    return RESPONSE_INSERT_OK;
}

export const modificarHorario = async (id: number, horario: Horario) => {
    console.log('horariosService::modificarHorario');
    await prisma.horarios.update({
        where: {
            id_horario: id
        },
        data: {
            id_medico: horario.id_medico,
            dia_semana: horario.dia_semana,
            hora_inicio: horario.hora_inicio,
            hora_fin: horario.hora_fin
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarHorario = async (id: number) => {
    console.log('horariosService::eliminarHorario');
    await prisma.horarios.update({
        where: {
            id_horario: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return RESPONSE_DELETE_OK;
}
