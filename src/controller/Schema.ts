import { DataSchema, PowerSchema } from "../model/Schema";
import { NodeId } from "../type";

export function GetPowerSchema(id: NodeId){
  if(!id){
    throw new Error("NodeId is null");
  }
  let ret = PowerSchema.get(id);
  if(!ret){
    throw new Error(`No schema called ${id} found`);
  }
  return ret;
}

export function GetDataSchema(id: NodeId){
  if(!id){
    throw new Error("NodeId is null");
  }
  let ret = DataSchema.get(id);
  if(!ret){
    throw new Error(`No schema called ${id} found`);
  }
  return ret;
}