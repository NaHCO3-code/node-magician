import { NodeId } from "../type";
import { DataNode } from "./MData";
import { Node } from "../type";
import { PowerNode } from "./MPower";

export class MFile{
  powerNodes: Map<string, PowerNode>
  dataNodes: Map<string, DataNode>

  constructor(){
    this.powerNodes = new Map();
    this.dataNodes = new Map();
  }

  GetPowerNode(id: NodeId){
    if(!id){
      throw new Error("NodeId is null");
    }
    return this.powerNodes.get(id)??null;
  }

  GetNode(id: NodeId): Node | null{
    if(!id){
      throw new Error("NodeId is null");
    }
    return this.powerNodes.get(id) ?? this.dataNodes.get(id) ?? null;
  }
}