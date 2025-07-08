import { Request, Response } from "express";
import * as especialidadesService from "../services/especialidadesService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { especialidadCrearSchema } from "../schemas/especialidadSchema";

export const listarEspecialidades = async (req: Request, res: Response) : Promise<any>=> {
    console.log('especialidadesController::listarEspecialidades');
    try {
        const response = await especialidadesService.listarEspecialidades();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));        
    }
}

export const obtenerEspecialidad = async (req: Request, res: Response): Promise<any> => {
    console.log('especialidadesController::obtenerEspecialidad');
    const { error }: any = especialidadCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    
    try {
        const { id } = req.params;
        const reponse = await especialidadesService.obtenerEspecialidad(Number(id));
        res.json(ResponseModel.success(reponse));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertarEspecialidad = async (req: Request, res: Response): Promise<any> => {
    console.log('especialidadesController::insertarEspecialidades');
    try {
        const response = await especialidadesService.insertarEspecialidad(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarEspecialidad = async (req: Request, res: Response): Promise<any> => {
    console.log('especialidadesController::modificarEspecialidad');
    try {
        const { id } = req.params;
        const response = await especialidadesService.modificarEspecialidad(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarEspecialidad = async (req: Request, res: Response) : Promise<any>=> {
    console.log('especialidadesController::eliminarEspecialidades');
    try {
        const { id } = req.params;
        const response = await especialidadesService.eliminarEspecialidad(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
