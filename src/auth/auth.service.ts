import { usuario } from './../../node_modules/.prisma/client/index.d';
// import { sign } from "crypto";
// import { signToken } from "./jwt";
// import { RESPONSE_CREDENTIALS_ERROR } from "../shared/constants";

// export const loginAuth = async (username: string, password: string) =>{
//     console.log('auth.service::loginAuth');
//     /* LOGICA CON BASE DE DATOS - TAREA */
    
//     if (username === 'admin' && password === 'admin') {
//         const token = signToken({ id: 1, role: 'ADMINISTRADOR', username});
//         return token;
//     } else {
//         return RESPONSE_CREDENTIALS_ERROR;
//     }
// }
import bcrypt from "bcrypt";
import { signToken } from "./jwt"; // Asegúrate que esta función retorne un JWT
import { PrismaClient } from "@prisma/client";// Ajusta según tu estructura
import { RESPONSE_CREDENTIALS_ERROR } from "../shared/constants";

const prisma = new PrismaClient();

export const loginAuth = async (username: string, password: string) => {
  console.log("auth.service::loginAuth");

  const usuario = await prisma.usuario.findFirst({
    where: {
      nombre_usuario: username,
      estado_auditoria: "1"
    },
    include: {
      rol: true
    }
  });

  if (!usuario) {
    throw new Error(RESPONSE_CREDENTIALS_ERROR);
  }

  const isPasswordValid = await bcrypt.compare(password, usuario.contrasena);

  if (!isPasswordValid) {
    throw new Error(RESPONSE_CREDENTIALS_ERROR);
  }

  // Generar token
  const token = signToken({
    id: usuario.id_usuario,
    username: usuario.nombre_usuario,
    role: usuario.rol?.nombre || "USER"
  });

  return token;
};

