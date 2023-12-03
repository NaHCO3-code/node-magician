import { GetDataSchema } from "../controller/Schema";
import { IDataArchive, IDataSchema } from "../type"
import { Node } from "../type";

export class DataNode implements Node{
  schema: IDataSchema
  value: string
  constructor(data: IDataArchive){
    this.schema = GetDataSchema(data.schema);
    this.value = data.value;
  }

  compile(){
    return this.schema.template(this.value);
  }
}