// import { Request, Response } from 'express';
// import * as loginService from './auth.service';
// import { ResponseModel } from '../shared/responseModel';
// import { STATUS_UNAUTHORIZED } from '../shared/constants';



// export const loginAuth  = async (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     try {
//         const token = await loginService.loginAuth(username, password);
//         res.json(ResponseModel.success({ token }));
//     } catch (error: any) {
//         res.status(STATUS_UNAUTHORIZED).json(ResponseModel.error(error.message));
//     }
// };
import { Request, Response } from "express";
import * as loginService from './auth.service';
import { ResponseModel } from '../shared/responseModel';
import { STATUS_UNAUTHORIZED, STATUS_BAD_REQUEST } from "../shared/constants";

export const loginAuth = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(STATUS_BAD_REQUEST)
      .json(ResponseModel.error("Faltan credenciales."));
  }

  try {
    const token = await loginService.loginAuth(username, password);
    return res.json(ResponseModel.success({ token }));
  } catch (error: any) {
    console.error("authController::loginAuth ->", error.message);
    return res
      .status(STATUS_UNAUTHORIZED)
      .json(ResponseModel.error(error.message));
  }
};
