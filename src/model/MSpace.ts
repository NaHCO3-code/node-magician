import { MPower } from "./MPower";
import { NodeId } from "./MSchema";

export class MSpace{
  powers: Map<NodeId, MPower>;
  constructor(){
    this.powers = new Map();
  }
}