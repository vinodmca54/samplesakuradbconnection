import {
  Routable,
  Route,
  SakuraApi,
  SapiRoutableMixin
} from '@sakuraapi/api';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import{User} from '../models/user';
export { SakuraApi };

@Routable({
  baseUrl:'users',
  model:User
})
export class UserApi extends SapiRoutableMixin() {

  @Route({
    method:'post',
    path:'/userdata'
  })

  getuserdata(req: Request, res: Response, next: NextFunction) {
    //const resLocals = res.locals as IRoutableLocals;
    res.send({status:200,message:'success the route'});
    next();
  }
}
