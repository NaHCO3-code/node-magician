import { vector2Like } from "../vector";

export enum MDataType{
  string,
  boolean,
  number,
  object,
  array,
  null,
}

export enum MInputMethod{
  socket,
  literal,
}

export type NodeId = string;


export interface MSocketSchema{
  title: string
  type: MDataType
  method: MInputMethod
  options: null | string[]
  optional: boolean
}

export interface MPowerSchema{
  title: string
  params: MSocketSchema[]
  result: MDataType | null
  template(params: string[]): string
}

export interface MPowerArchive{
  position: vector2Like
  schema: string
  prev: NodeId | null
  next: NodeId | null
  params: (NodeId | null)[]
}