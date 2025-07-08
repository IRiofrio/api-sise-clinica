import { tipo_documentos } from "@prisma/client";
import { TipoDocumento } from "../models/tipoDocumento";

export const fromPrismaTipoDocumento = (tipoDocumento: tipo_documentos) => {
  return {
    idTipoDocumento: tipoDocumento.id_tipo_documento,
    nombre: tipoDocumento.nombre,
    estadoAuditoria: tipoDocumento.estado_auditoria,
    fechaCreacion: tipoDocumento.fecha_creacion? new Date(tipoDocumento.fecha_creacion) : null,
    fechaActualizacion: tipoDocumento.fecha_actualizacion? new Date(tipoDocumento.fecha_actualizacion): null
  };
}

export const toPrismaTipoDocumento = (tipoDocumento: TipoDocumento) => {
  return {
    nombre: tipoDocumento.nombre
  };
}