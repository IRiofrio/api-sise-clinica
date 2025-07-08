import { STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "./constants";

export class ResponseModel{
    constructor(public success: boolean, public message: string, public status: number, public data: any) {}

    static success(data: any, message: string = 'OK'): ResponseModel{
        return new ResponseModel(true, message, STATUS_OK, data);
    }

    static error(message: string, status: number = STATUS_INTERNAL_SERVER_ERROR): ResponseModel{
        return new ResponseModel(false, message, status, null);
    }

}