import { Request, Response } from "express";
import * as medicosService from "../services/medicosService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { medicoCrearSchema } from "../schemas/medicosSchema";

export const listarMedicos = async (req: Request, res: Response):Promise<any> => {
    console.log('medicosController::listarMedicos');
    try {
        const response = await medicosService.listarMedicos();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerMedico = async (req: Request, res: Response):Promise<any> => {
    console.log('medicosController::obtenerMedico');
    try {
        const { id } = req.params;
        const response = await medicosService.obtenerMedico(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertarMedico = async (req: Request, res: Response):Promise<any> => {
    console.log('medicosController::insertarMedico');
    const { error }: any = medicoCrearSchema.validate(req.body);
        if(error){
         return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
        }
    try {
        const response = await medicosService.insertarMedico(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarMedico = async (req: Request, res: Response):Promise<any> => {
    console.log('medicosController::modificarMedico');
    try {
        const { id } = req.params;
        const response = await medicosService.modificarMedico(Number(id), req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarMedico = async (req: Request, res: Response):Promise<any> => {
    console.log('medicosController::eliminarMedico');
    try {
        const { id } = req.params;
        const response = await medicosService.eliminarMedico(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
