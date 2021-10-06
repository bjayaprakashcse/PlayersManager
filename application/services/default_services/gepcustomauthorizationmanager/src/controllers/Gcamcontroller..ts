import { GcamService } from '../services/Gcamservice';
import { Request, response, Response } from 'express';
import { CustomLogger } from '../config/Logger'

let gcam = new GcamService;

export class GcamController {
    public getResourceAuthorizations(req: Request, res: Response){
        gcam.getResourceAuthorizations((response)=> {
            res.status(200);
            res.json(response);
        });
    }
}

    