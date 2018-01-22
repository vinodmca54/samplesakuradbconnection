/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/api';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
declare const UserApi_base: {
    new (...args: any[]): {
        sapi?: SakuraApi;
        sapiConfig?: any;
    };
    getRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    getAllRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    putRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    postRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    deleteRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    sapi?: SakuraApi;
    sapiConfig?: any;
} & (new (...args: any[]) => {});
export declare class UserApi extends UserApi_base {
    getuserdata(req: Request, res: Response, next: NextFunction): void;
}
