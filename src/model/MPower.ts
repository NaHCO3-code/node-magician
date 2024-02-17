import { getPowerSchema } from "../controller/CSchema";
import { Vector2 } from "../vector";
import { MPowerArchive, MPowerSchema, NodeId } from "./MSchema";

export class MPower{
  position: Vector2
  schema: MPowerSchema
  prev: NodeId | null
  next: NodeId | null
  params: (NodeId | null)[]

  constructor(node: MPowerArchive){
    this.check(node);
    this.schema = getPowerSchema(node.schema) as MPowerSchema;
    this.position = Vector2.fromJSON(node.position);
    this.prev = node.prev;
    this.next = node.next;
    this.params = node.params;
  }

  check(node: MPowerArchive){
    if(getPowerSchema(node.schema) == null){
      throw new Error("Invalid power schema");
    }
  }

  compile(){
    
  }
}