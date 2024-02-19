import { MPower } from "./MPower";
import { NodeID } from "./MSchema";

export class MSpace{
  powers: Map<NodeID, MPower>;
  constructor(){
    this.powers = new Map();
  }
}