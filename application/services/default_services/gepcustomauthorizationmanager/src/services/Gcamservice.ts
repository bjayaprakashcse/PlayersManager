import { Request, Response, NextFunction } from "express";
import * as asyncLoop from 'node-async-loop';
import * as mongoose from 'mongoose';
import * as fetch from 'node-fetch';
import * as FormData from 'form-data';
import { Resourceschema } from '../model/resource';
import { CustomLogger } from '../config/Logger'
import { gcamService } from '../config/gcamService';
import { Gcamdao } from '../dao/Gcamdao';
// import { DmnWorkerFile } from '../worker/DMNWorker';


import * as path from 'path';
import * as fs from 'fs';

let listofresources = [];
let role_data;
let gcamdao = new Gcamdao();
const resourcemodel = mongoose.model('resource', Resourceschema);

export class GcamService {

    private resourcevalue: any;

    constructor() { }
    public getResourceAuthorizations(callback){
        callback(gcamdao.getResourceAuthorizations());
    }
}