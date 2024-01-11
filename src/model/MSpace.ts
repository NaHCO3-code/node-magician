import { MPower } from "./MPower";
import { NodeId } from "./MSchema";

export class Space{
  powers: Map<NodeId, MPower>;
  constructor(){
    this.powers = new Map();
  }
}