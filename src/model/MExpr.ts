import { getExprSchema } from "../controller/CSchema";
import { Vector2 } from "../vector";
import { MExprArchive, MExprSchema } from "./MSchema";

export class MExpr{
  position: Vector2
  schema: MExprSchema
  schemaName: string
  value: any

  constructor(arch: MExprArchive){
    this.position = Vector2.fromJSON(arch.position);
    this.schema = getExprSchema(arch.schema);
    this.schemaName = arch.schema;
    this.value = arch.value;
  }

  toJSON(): MExprArchive{
    return {
      position: this.position.toJSON(),
      schema: this.schemaName,
      value: this.value
    }
  }
}