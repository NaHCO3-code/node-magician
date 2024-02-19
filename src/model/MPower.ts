import { getPowerSchema } from "../controller/CSchema";
import { Vector2 } from "../vector";
import { MPowerArchive, MPowerSchema, NodeID } from "./MSchema";
import { MSpace } from "./MSpace";

export class MPower{
  position: Vector2
  schema: MPowerSchema
  prevID: NodeID | null
  nextID: NodeID | null
  params: (NodeID | null)[]

  constructor(node: MPowerArchive){
    this.check(node);
    this.schema = getPowerSchema(node.schema) as MPowerSchema;
    this.position = Vector2.fromJSON(node.position);
    this.prevID = node.prev;
    this.nextID = node.next;
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