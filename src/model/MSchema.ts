import { vector2JSON } from "../vector";
import { MSpace } from "./MSpace";

export enum MDataType{
  string,
  boolean,
  number,
  object,
  array,
  null,
}

export enum MInputMethod{
  text,
  number,
}

export enum MState{
  OK,
  FAIL
}

export type NodeID = number;

export interface MSocketSchema{
  title: string
  type: MDataType
  optional: boolean
}

export interface MPowerSchema{
  title: string
  params: MSocketSchema[]
  result: MDataType | null
  template(params: string[]): string
}

export interface MExprSchema{
  title: string
  method: MInputMethod
  template(input: any): string
  check(input: any, space: MSpace): MState
}

export interface MPowerArchive{
  position: vector2JSON
  schema: string
  prev: NodeID | null
  next: NodeID | null
  params: (NodeID | null)[]
}

export interface MExprArchive{
  position: vector2JSON
  schema: string
  value: any
}