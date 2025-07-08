import { Request, Response } from "express";
import * as tipoDocumentoService from "../services/tipoDocumentoService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { tipoDocumentoCrearSchema } from "../schemas/tipoDocumentoSchema";

export const insertarTipoDocumento = async (req: Request, res: Response) : Promise<any>=> {
    console.log('tipoDocumentoController::insertarTipoDocumento');
    const { error }: any = tipoDocumentoCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {
        const response = await tipoDocumentoService.insertarTipoDocumento(req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}	

export const listarTipoDocumentos = async (req: Request, res: Response) : Promise<any>=> {
    console.log('tipoDocumentoController::listarTipoDocumentos');
    try {
        const tipoDocumentos = await tipoDocumentoService.listarTipoDocumentos();
        res.json(ResponseModel.success(tipoDocumentos));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerTipoDocumento = async (req: Request, res: Response) : Promise<any>=> {
    console.log('tipoDocumentoController::obtenerTipoDocumento');
    try {
        const { id } = req.params;
        const tipoDocumento = await tipoDocumentoService.obtenerTipoDocumento(Number(id));
        res.json(ResponseModel.success(tipoDocumento));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarTipoDocumento = async (req: Request, res: Response) : Promise<any>=> {
    console.log('tipoDocumentoController::modificarTipoDocumento');
    try {
        const { id } = req.params;
        const response = await tipoDocumentoService.modificarTipoDocumento(Number(id), req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarTipoDocumento = async (req: Request, res: Response) : Promise<any>=> {
    try {
        const { id } = req.params;
        const response = await tipoDocumentoService.eliminarTipoDocumento(Number(id));
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}