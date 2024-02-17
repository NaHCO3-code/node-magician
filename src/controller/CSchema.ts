import { MPowerSchema, MDataType, MInputMethod, MExprSchema, MExprType, MState } from "../model/MSchema";

function dictToMap<T>(dict: {[key: string]: T}){
  let ret = new Map<string, T>();
  for (let key in dict){
    ret.set(key, dict[key]);
  }
  return ret;
}

export const PowerSchema = dictToMap<MPowerSchema>({
  "console.log": {
    title: "Log",
    params: [
      {
        title: "content",
        type: MDataType.string,
        optional: false,
      }
    ],
    result: null,
    template(params){
      return `console.log(${params[0]});`;
    }
  }
});

export const ExprSchema = dictToMap<MExprSchema>({
  "string": {
    title: "String",
    type: MExprType.literal,
    method: MInputMethod.text,
    template(input){
      return `"${input}"`;
    },
    check() {
      return MState.OK;
    }
  }
})

export function getPowerSchema(name: string): MPowerSchema{
  if(!PowerSchema.has(name)){
    return {
      title: "ERROR BLOCK",
      params: [],
      result: null,
      template(){
        throw new Error("Invaild Schema Found.");
      }
    }
  }
  return PowerSchema.get(name) as MPowerSchema;
}

export function getExprSchema(name: string): MExprSchema{
  if(!ExprSchema.has(name)){
    return {
      title: "ERROR BLOCK",
      type: MExprType.literal,
      method: MInputMethod.text,
      template(){
        throw new Error("Invaild Schema Found.");
      },
      check(){
        return MState.FAIL;
      }
    }
  }
  return ExprSchema.get(name) as MExprSchema;
}