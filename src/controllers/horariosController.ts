import { Request, Response } from "express";
import * as horariosService from "../services/horariosService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { horarioCrearSchema } from "../schemas/horarioSchema";

export const listarHorarios = async (req: Request, res: Response) : Promise<any>=> {
    console.log('horariosController::listarHorarios');
    try {
        const response = await horariosService.listarHorarios();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerHorario = async (req: Request, res: Response) : Promise<any>=> {
    console.log('horariosController::obtenerHorario');
    try {
        const { id } = req.params;
        const response = await horariosService.obtenerHorario(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertarHorario = async (req: Request, res: Response) : Promise<any>=> {
    console.log('horariosController::insertarHorario');
    const { error }: any = horarioCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    
    try {
        const response = await horariosService.insertarHorario(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarHorario = async (req: Request, res: Response): Promise<any> => {
    console.log('horariosController::modificarHorario');
    try {
        const { id } = req.params;
        const response = await horariosService.modificarHorario(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarHorario = async (req: Request, res: Response) => {
    console.log('horariosController::eliminarHorario');
    try {
        const { id } = req.params;
        const response = await horariosService.eliminarHorario(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
