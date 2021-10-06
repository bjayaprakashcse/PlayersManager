import { Request, Response, NextFunction } from "express";
import { PlayerController } from '../controller/PlayerController';

export class Routes {
    private player: PlayerController = new PlayerController();

    public routes(app): void {
        app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/player/:id').delete(this.player.GpDelete);
        app.route('/player/get/search').get(this.player.GpSearch);
        app.route('/player/get/update').put(this.player.GpSearchForUpdate);
        app.route('/player').put(this.player.GpUpdate);
        app.route('/player/:id').get(this.player.GpGetNounById);
        app.route('/player').get(this.player.GpGetAllValues);
        app.route('/player').post(this.player.GpCreate);
    }

}
