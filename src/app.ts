import express, { Application } from 'express';
import cors from 'cors';
import tipoDocumentoRoute from './routes/tipoDocumentoRoute';
import especialidadesRoute from './routes/especialidadesRoute';
import horariosRoute from './routes/horariosRoute';
import pacientesRoute from './routes/pacientesRoute';
import medicosRoute from './routes/medicosRoute';
import citasRoute from './routes/citasRoute';
import env from './config/env';
import authRouter from './routes/authRouter';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';

/*
    CONFIGURAR CONEXION A BD, RUTAS Y OTRAS COSAS DE LOS SERVICIOS
*/

const app: Application = express();

//Base de datos

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

app.use(`${env.API_PREFIX}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Rutas
app.use(`${env.API_PREFIX}/tipo-documentos`, tipoDocumentoRoute);
app.use(`${env.API_PREFIX}/especialidades`, especialidadesRoute);
app.use(`${env.API_PREFIX}/horarios`, horariosRoute);
app.use(`${env.API_PREFIX}/pacientes`, pacientesRoute);
app.use(`${env.API_PREFIX}/medicos`, medicosRoute);
app.use(`${env.API_PREFIX}/citas`, citasRoute);
app.use(`${env.API_PREFIX}/auth`, authRouter);

export default app;

