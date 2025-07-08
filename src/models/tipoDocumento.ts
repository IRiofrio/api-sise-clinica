export interface TipoDocumento {
  idTipoDocumento: number;
  nombre: string;
  estadoAuditoria: string | null;
  fechaCreacion: Date | null;
  fechaActualizacion: Date | null;
}
