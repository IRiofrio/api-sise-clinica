import { Medico } from "./medico";
import { Paciente } from "./paciente";

export interface Cita {
  id_cita?: number;          
  id_paciente: number;       
  id_medico: number;         
  fecha: Date;               
  hora: Date;                
  estado_cita?: string;      
  estado_auditoria?: string; 
  fecha_creacion?: Date;     
  fecha_actualizacion?: Date; 
  medicos?: Medico;          
  pacientes?: Paciente;      
}
