export interface ISchemaInfo{
  base: string,
  title: string,
  version: string,
}

export enum SocketType{
  string,
  number,
  boolean,
  null,
  any,
}
export enum LiteralType{
  string,
  number,
  boolean
}

export interface ISocketSchema{
  type: SocketType,
  title: string,
  optional: boolean,
}
export interface ILiteralSchema{
  type: LiteralType,
  title: string,
  options?: string[],
}

export interface INodeSchema{
  class: string,
  title: string,
  param: ISocketSchema[],
  template: (params: string[]) => string
}
export interface IDataSchema extends INodeSchema{
  literal: ILiteralSchema[],
}
export interface IBlockSchema{
  class: string,
  title: string,
  param: ISocketSchema[],
  template: (codes: string[], params: string[]) => string
}

export type INodeSchemaObj = {[key: string]: INodeSchema}
export type IDataSchemaObj = {[key: string]: IDataSchema}
export type IBlockSchemaObj = {[key: string]: IBlockSchema}
export function CreateNodeSchema(obj: INodeSchemaObj): Map<string, INodeSchema>{
  let ret = new Map<string, INodeSchema>();
  for(let i in obj){
    ret.set(i, obj[i]);
  }
  return ret;
}
export function CreateDataSchema(obj: IDataSchemaObj): Map<string, IDataSchema>{
  let ret = new Map<string, IDataSchema>();
  for(let i in obj){
    ret.set(i, obj[i]);
  }
  return ret;
}
export function CreateBlockSchema(obj: IBlockSchemaObj): Map<string, IBlockSchema>{
  let ret = new Map<string, IBlockSchema>();
  for(let i in obj){
    ret.set(i, obj[i]);
  }
  return ret;
}
