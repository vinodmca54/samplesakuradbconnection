import {
  IDbGetParams,
  IFromDbOptions,
  Model,
  SakuraApi,
  SapiModelMixin,
  Db,
  Json
} from '@sakuraapi/api';
import {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  Db as MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult
} from 'mongodb';
import{dbs} from '../config/bootstrap/db';
//import { json } from 'express';
export {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult,
  IDbGetParams,
  IFromDbOptions,
  SakuraApi
};

@Model({dbConfig: dbs.students})
export class StudentModel extends SapiModelMixin() {
  
}
