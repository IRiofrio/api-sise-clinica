export interface Horario {
  id_horario?: number;
  id_medico: number;  
  dia_semana: string; 
  hora_inicio: Date;  
  hora_fin: Date;     
  estado_auditoria?: string;
  fecha_creacion?: Date;   
  fecha_actualizacion?: Date;
}
