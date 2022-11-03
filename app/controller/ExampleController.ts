import {Request, Response} from "express"
import ResponseHelper, { StatusCode } from "../helper/ResponseHelper"

class ExampleController {
    index(req : Request,res : Response){
       return ResponseHelper.success(res,{message: "SUCCESS",status : StatusCode.SUCCESS,data : [{
            dataTest : "halo"
        }] })
    }
    save(req:Request,res:Response){
        return ResponseHelper.created(res,{message:"CREATED",status:StatusCode.CREATED})
    }
}
export default new ExampleController()