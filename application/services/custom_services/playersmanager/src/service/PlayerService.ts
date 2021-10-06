import { Request, Response } from 'express';
import { PlayerDao } from '../dao/playerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let player = new PlayerDao();

export class PlayerService {

    constructor() { }

    public GpDelete(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpDelete')
        let playerId = req.params.id;
        player.GpDelete(playerId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpDelete')
            callback(response);
        });
    }

    public GpSearch(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpSearch')
        let playerData = req.query;
        if(playerData.minPrice !== undefined && playerData.maxPrice !== undefined) {
            player.GpDefaultSearchListModelByPriceRange(playerData, callback);
        }
        else if(playerData.lowprice !== undefined && playerData.type !== undefined) {
            player.GpDefaultSearchByLowPriceByType(playerData, callback)
        }
        else if(playerData.type !== undefined) {
            player.GpDefaultSearchByType(playerData, callback)
        }

        else if(playerData.best_seller !== undefined) {
            player.GpDefaultSearchByBestSellers(playerData, callback)
        }
        else {
            player.GpSearch(playerData, (response) => {
                new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpSearch')
                callback(response);
            });
        }
    }


    public GpSearchForUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpSearchForUpdate')
        let playerData = req.body;
        player.GpSearchForUpdate(playerData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpSearchForUpdate')
            callback(response);
        });
    }

    public GpUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpUpdate')
        let playerData = req.body;
        player.GpUpdate(playerData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpUpdate')
            callback(response);
        });
    }

    public GpGetNounById(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpGetNounById')
        let playerId = req.params.id;
        player.GpGetNounById(playerId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpGetNounById')
            callback(response);
        });
    }

    public GpGetAllValues(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpGetAllValues')

        player.GpGetAllValues((response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpGetAllValues')
            callback(response);
        });
    }

    public GpCreate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into playerService.ts: GpCreate')
        let playerData = req.body;
        player.GpCreate(playerData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from playerService.ts: GpCreate')
            callback(response);
        });
    }

}
