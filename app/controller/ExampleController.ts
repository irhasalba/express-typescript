import {Request, Response} from "express"

class ExampleController {
    index(req : Request,res : Response){
        res.send({message : "OK"})
    }
}
export default new ExampleController()