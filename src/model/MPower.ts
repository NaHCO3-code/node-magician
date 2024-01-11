import { getPowerSchema } from "../controller/CSchema";
import { vector2 } from "../vector";
import { MPowerArchive, MPowerSchema, NodeId } from "./MSchema";

export class MPower{
  schema: MPowerSchema
  position: vector2
  prev: NodeId | null
  next: NodeId | null
  params: (NodeId | null)[]

  constructor(node: MPowerArchive){
    this.check(node);
    this.schema = getPowerSchema(node.schema) as MPowerSchema;
    this.position = vector2.fromVector2Like(node.position);
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