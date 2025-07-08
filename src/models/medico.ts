import { Cita } from "./cita";
import { Especialidad } from "./especialidad";
import { Horario } from "./horario";

export interface Medico {
  id_medico?: number;         
  nombres: string;            
  apellidos: string;          
  correo?: string;            
  celular?: string;           
  id_especialidad: number;    
  estado_auditoria?: string;  
  fecha_creacion?: Date;      
  fecha_actualizacion?: Date;

  citas?: Cita[];             
  horarios?: Horario[];       
  especialidad?: Especialidad;
}
