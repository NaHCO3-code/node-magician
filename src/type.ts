export enum DataType{
  string,
  number,
  boolean
}

export interface ISocketSchema{
  title: string
  type: DataType
  optional: boolean
  literal: boolean
  options?: string[]
}

export interface IPowerSchema{
  title: string
  class: string
  param: ISocketSchema[]
  value: DataType | null
  template: (params: string[]) => string
}

export interface IDataSchema{
  template: (input: string) => string
}



export type NodeId = string | null

export function CreateSchema<T extends IPowerSchema | IDataSchema>(schemaObj: {[key: string]: T}){
  let schema = new Map<string, T>();
  for(let i in schemaObj){
    schema.set(i, schemaObj[i]);
  }
  return schema;
}



export interface IPowerArchive{
  schema: string
  position: [number, number]
  params: NodeId[]
  prev: NodeId
  next: NodeId
}

export interface IDataArchive{
  schema: string
  value: string
}



export interface Node{
  compile: () => string
}