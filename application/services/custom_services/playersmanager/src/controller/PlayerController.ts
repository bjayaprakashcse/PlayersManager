import { Request, Response } from 'express';
import { PlayerService } from '../service/PlayerService';
import { CustomLogger } from '../config/Logger'
let player = new PlayerService();

export class PlayerController {

    constructor() { }

    public GpDelete(req: Request, res: Response) {
        player.GpDelete(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpDelete');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpDelete');
        })
    }

    public GpSearch(req: Request, res: Response) {
        player.GpSearch(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpSearch');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpSearch');
        })
    }

    public GpSearchForUpdate(req: Request, res: Response) {
        player.GpSearchForUpdate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpSearchForUpdate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpSearchForUpdate');
        })
    }

    public GpUpdate(req: Request, res: Response) {
        player.GpUpdate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpUpdate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpUpdate');
        })
    }

    public GpGetNounById(req: Request, res: Response) {
        player.GpGetNounById(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpGetNounById');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpGetNounById');
        })
    }

    public GpGetAllValues(req: Request, res: Response) {
        player.GpGetAllValues(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpGetAllValues');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpGetAllValues');
        })
    }

    public GpCreate(req: Request, res: Response) {
        player.GpCreate(req, (response) => {
            new CustomLogger().showLogger('info', 'Enter into playerController.ts: GpCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from playerController.ts: GpCreate');
        })
    }


}
