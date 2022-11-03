import { Express,Response} from "express";


export enum StatusCode {
    SUCCESS = 200,
    FAILED = 400,
    INTERNAL_SERVER_ERROR = 500,
    CREATED = 201
}

interface ResponseData {
    status :number,
    message : "SUCCESS" | "FAILED" | "CREATED" | "NOT FOUND" | "INTERNAL SERVER ERROR",
    data? : any
}

class ResponseHelper {
    success(res: Response,responseData :ResponseData){
        return res.send(responseData)
    }
    created(res:Response,message:ResponseData){
        return res.send(message);
    }
    failed(res:Response,message:ResponseData){
        return res.send(message)
    }
}

export default new ResponseHelper();