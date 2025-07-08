export interface Paciente {
    idPaciente: number;
    nombres: string;
    apellidos: string;
    edad: number;
    fechaNacimiento: Date;
    idTipoDocumento: number;
    numeroDocumento: string;
    direccion: string;
    correo: string;
    genero: string;
    estadoAuditoria: string;
    fechaCreacion?: Date ;
    fechaActualizacion?: Date ;
}