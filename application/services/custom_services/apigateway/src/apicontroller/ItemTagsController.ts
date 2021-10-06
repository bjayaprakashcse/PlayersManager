import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class ItemTagsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/ItemTags/:id', this.GpDelete);
this.router.get('/ItemTags/get/search', this.GpSearch);
this.router.put('/ItemTags/get/update', this.GpSearchForUpdate);
this.router.put('/ItemTags', this.GpUpdate);
this.router.get('/ItemTags/:id', this.GpGetNounById);
this.router.get('/ItemTags', this.GpGetAllValues);
this.router.post('/ItemTags', this.GpCreate);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpSearch');
        new ApiAdaptar().get(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpSearchForUpdate');
        new ApiAdaptar().put(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpGetNounById');
        new ApiAdaptar().get(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ItemTagsController.ts: GpCreate');
        new ApiAdaptar().post(Constant.GEPITEMTAGSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ItemTagsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
