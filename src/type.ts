import { vector2 } from "./vector";

// schema信息
export interface ISchemaInfo{
  base: string,
  name: string,
  version: string,
}


// 接口类型
export enum SocketType{
  string,
  number,
  boolean,
  null,
  any,
}
// 接口schema
export interface ISocketSchema{
  type: SocketType,
  title: string,
  optional: boolean,
  literal: boolean,
  options?: string[],
}


// 节点schema
export interface INodeSchema{
  class: string,
  title: string,
}
// 普通节点
export interface IPowerSchema extends INodeSchema{
  param: ISocketSchema[],
  template: (params: (string|null)[]) => string
}
// 代码块节点
export interface IBlockSchema extends INodeSchema{
  param: ISocketSchema[],
  template: (codes: (string|null)[], params: (string|null)[]) => string
}


// 以对象形式定义的schema
export type SchemaObj<T> = {[key: string]: T}

/**
 * 将以对象形式定义的schema转换为map形式
 * @param obj schema对象
 * @returns 一个map
 */
export function CreateSchema<T>(obj: SchemaObj<T>): Map<string, T>{
  let ret = new Map<string, T>();
  for(let i in obj){
    ret.set(i, obj[i]);
  }
  return ret;
}

export type NodeId = string | null

export interface INode{
  schema: string,
  position: vector2,
  params: NodeId[],
  next: NodeId
}

export interface IBlock{
  schema: string,
  position: vector2,
  params: NodeId[],
  interNext: NodeId,
  next: NodeId
}

export interface ILiteral{
  value: string
}

export interface IFile{
  nodes: Map<string, INode>,
  blocks: Map<string, IBlock>,
  literals: Map<string, ILiteral>
}

export interface IProgramInfo{
  schemaInfo: ISchemaInfo,
  title: string,
  author: string,
  version: string,
  description: string,
}

export interface IProgram{
  programInfo: IProgramInfo,
  files: Map<string, IFile>,
}

export interface IFileArch{
  nodes: {[key: string]: INode},
  blocks: {[key: string]: IBlock},
  literals: {[key: string]: ILiteral}
}
export interface IArchive{
  programInfo: IProgramInfo,
  files: {[key: string]: IFileArch}
}