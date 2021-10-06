import mongoose = require('mongoose');
import { Resourceschema } from '../model/resource';
import * as asyncLoop from 'node-async-loop';

const screenschema = mongoose.model('resources', Resourceschema);

import * as  sampleResource  from '../assets/resources.json';

export class Gcamdao {
    public getResourceAuthorizations() {
        return sampleResource.resources;
    }
}