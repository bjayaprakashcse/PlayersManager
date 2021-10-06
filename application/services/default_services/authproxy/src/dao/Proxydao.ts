import mongoose = require('mongoose');
import * as jwt from 'jsonwebtoken';
import * as fetch from 'node-fetch';
import { Signinschema } from '../model/Signin';
import * as Constants from '../config/constants';
import { CustomLogger } from '../config/Logger'

const signinmodel = mongoose.model('Signin', Signinschema);

export class Proxydao {

    public userdao(userdetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into Proxydao.ts: userdao');

        var role = userdetails.role;
        var jsonbody = {
            "variables": {
                "role": {
                    "value": role,
                    "type": "String"
                }
            }
        }
        var posturl = `${Constants.gcamUrl}/accesslevel`
      
        fetch(posturl, { method: 'POST', body: {} })
            .then(res => res.json())
            .then((response) => {
                new CustomLogger().showLogger('info', 'Exit from Proxydao.ts: userdao');
                callback(response);
            }).catch(error => {
                callback(error);
            })
    }
}