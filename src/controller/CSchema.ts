import { MPowerSchema, MDataType, MInputMethod } from "../model/MSchema";

function dictToMap<T>(dict: {[key: string]: T}){
  let ret = new Map<string, T>();
  for (let key in dict){
    ret.set(key, dict[key]);
  }
  return ret;
}

export const PowerSchema = dictToMap<MPowerSchema>({
  "console.log": {
    title: "log",
    params: [
      {
        title: "content",
        type: MDataType.string,
        method: MInputMethod.socket,
        options: null,
        optional: false,
      }
    ],
    result: null,
    template(params){
      return `console.log(${params[0]});`;
    }
  },
  "string":{
    title: "string",
    params: [
      {
        title: "value",
        type: MDataType.string,
        method: MInputMethod.literal,
        options: null,
        optional: true,
      }
    ],
    result: MDataType.string,
    template(params){
      return `"${params[0]}"`
    }
  }
});

export function getPowerSchema(name: string){
  return PowerSchema.get(name);
}