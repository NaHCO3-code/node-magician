import { WorkFile } from "../controller/MFile";
import { GetPowerSchema } from "../controller/Schema";
import { IPowerArchive, IPowerSchema } from "../type";
import { vector2 } from "../vector";
import { Node } from "../type";

export class PowerNode implements Node{
  schema: IPowerSchema
  position: vector2
  params: (Node | null)[]
  prev: PowerNode | null
  next: PowerNode | null

  constructor(node: IPowerArchive){
    this.schema = GetPowerSchema(node.schema);
    this.position = new vector2(...node.position);
    this.params = [];
    this.prev = WorkFile.GetPowerNode(node.prev);
    this.next = WorkFile.GetPowerNode(node.next);

    for(let i of node.params){
      this.params.push(WorkFile.GetNode(i));
    }
  }

  compile(){
    return this.schema.template(this.getParams())
  }

  getParams(){
    let params: string[] = [];
    this.params.forEach((p, i) => {
      if(!p && !this.schema.param[i].optional){
        throw new Error("This param is required but not given.");
      }
      params.push(p?.compile()??"");
    })
    return params;
  }
}