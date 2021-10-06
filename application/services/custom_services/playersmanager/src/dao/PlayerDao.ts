import * as mongoose from 'mongoose';
import playerModel from '../models/Players';
import { CustomLogger } from '../config/Logger'


export class PlayerDao {
    private player = playerModel;
    constructor() { }

    public async GpDelete(playerId, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpDelete');
        this.player.findByIdAndRemove(playerId).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpDelete');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpSearch(playerData, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpSearch');

        let andkey; let and_obj = {}; let orkey; let or_obj = {};;
        Object.entries(playerData).forEach(
            ([key, value]) => {
                if (value !== '') {
                    andkey = key;
                    and_obj[andkey] = value;
                }
                else {
                    orkey = key;
                    or_obj[orkey] = { $ne: '' }
                }
            }
        );;
        this.player.find({
            $and: [
                {
                    $or: [
                        or_obj
                    ]
                },
                and_obj
            ]
        }).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpSearch');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpSearchForUpdate(playerData, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpSearchForUpdate');
        this.player.findOneAndUpdate({ _id: playerData._id }, playerData, { new: true }).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpSearchForUpdate');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpUpdate(playerData, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpUpdate');
        this.player.findOneAndUpdate({ _id: playerData._id }, playerData, { new: true }).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpUpdate');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpGetNounById(playerId, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpGetNounById');
        this.player.findById(playerId).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpGetNounById');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpGetAllValues(callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpGetAllValues');
        this.player.find().then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpGetAllValues');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async GpCreate(playerData, callback) {

        new CustomLogger().showLogger('info', 'Enter into playerDao.ts: GpCreate');

        let temp = new playerModel(playerData);
        temp.save().then((result) => {

            new CustomLogger().showLogger('info', 'Exit from playerDao.ts: GpCreate');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }


    public GpDefaultSearchByType(playerData, callback) {
        this.player.find().then((response) => {
            let hash = response.reduce((p, c) => (p[c.category] ? p[c.category].push(c) : p[c.category] = [c], p), {}),
                newData = Object.keys(hash).map(k => ({ category: k, categoryArray: hash[k].sort((a, b) => Number(a.price) - Number(b.price)) }));
            callback(newData);
        }).catch((error) => {
            callback(error);
        });
    }

    public GpDefaultSearchByLowPriceByType(playerData, callback) {
        this.player.find().then((response) => {
            let arrayData = response.filter(item => item.category === playerData.type).sort((a, b) => Number(a.price) - Number(b.price))
            callback(arrayData);
        }).catch((error) => {
            callback(error);
        });
    }

    public GpDefaultSearchListModelByPriceRange(playerData, callback) {
        this.player.find().then((response) => {
            let arrayData = response.filter(item => (item.price >= playerData.minPrice && item.price <= playerData.maxPrice))
            let hash = arrayData.reduce((p, c) => (p[c.brand] ? p[c.brand].push(c) : p[c.brand] = [c], p), {}),
                newData = Object.keys(hash).map(k => ({ brand_name: k, brand_count: hash[k].length }));
            callback(newData);
        }).catch((error) => {
            callback(error);
        });
    }

    public GpDefaultSearchByBestSellers(playerData, callback) {
        this.player.find().then((response) => {
            let filteredData = response.filter(item => item.best_seller === true);
            callback(filteredData);
        }).catch((error) => {
            callback(error);
        });
    }


}
