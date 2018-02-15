import {
  Routable,
  Route,
  SakuraApi,
  SapiRoutableMixin,
  SapiDbForModelNotFound,
  Model
} from '@sakuraapi/api';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import{EmpModel} from '../models/emp-model';
export { SakuraApi };

@Routable({
  baseUrl:'employee',
  model:EmpModel
})
export class EmpdetalisApi extends SapiRoutableMixin() {

  @Route({
    method:'post',
    path:'/empinfo',
  })
  getempdetails(req: Request, res: Response, next: NextFunction) {
    res.send({status:200,message:"route successfully invoked and posted"});
    next();
  }


  @Route({
    method:'get',
    path:'/empinfologs',
  })
  getemplogdetails(req: Request, res: Response, next: NextFunction) {    
    res.send({status:200,message:"route successfully invoked for empdetails logs"});
    next();
  }
}

// @Routable({
//   baseUrl:'students',

// })
// export class Clientinfo extends SapiRoutableMixin(){
//   @Route({
//     method:'get',
//     path:'/userdatainfo'
//   })

//   postClientinfo(req:Request,res:Response,next:NextFunction){
//     res.send({status:200,message:"route successfully invoked for client"});
//     next();
//   }
// }
