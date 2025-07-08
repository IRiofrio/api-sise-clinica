import { PrismaClient, tipo_documentos } from "@prisma/client";
import { TipoDocumento } from '../models/tipoDocumento';
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaTipoDocumento } from "../mappers/tipoDocumento.mapper";


const prisma = new PrismaClient();

export const listarTipoDocumentos = async() =>{
    console.log('tipoDocumentoService::listarTipoDocumentos');

    const tipoDocumentos: tipo_documentos[] = await prisma.tipo_documentos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_tipo_documento: 'asc'
        }
    });

    return tipoDocumentos.map((tipoDocumentos: tipo_documentos) =>fromPrismaTipoDocumento(tipoDocumentos));
}

export const obtenerTipoDocumento = async( id: number) => {
    console.log('tipoDocumentoService::obtenerTipoDocumento');

    const tipoDocumento: tipo_documentos | null = await prisma.tipo_documentos.findUnique({
        where: {
            id_tipo_documento: id
        }
    });

    return tipoDocumento;
}

export const insertarTipoDocumento = async(tipoDocumento: TipoDocumento) => {
    console.log('tipoDocumentoService::insertarTipoDocumento');

    await prisma.tipo_documentos.create({
        data: tipoDocumento
    });

    return RESPONSE_INSERT_OK;
}

export const modificarTipoDocumento = async(id: number, tipoDocumento: TipoDocumento) => {
    console.log('tipoDocumentoService::modificarTipoDocumento');

    await prisma.tipo_documentos.update({
        where: {
            id_tipo_documento: id
        },
        data: {
            ...tipoDocumento,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarTipoDocumento = async (id: number) => {
    console.log('tipoDocumentoService::eliminarTipoDocumento');

    await prisma.tipo_documentos.update({
        where: {
            id_tipo_documento: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;
}