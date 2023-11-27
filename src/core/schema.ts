import { CreateSchema, IBlockSchema, IPowerSchema, ISchemaInfo, SocketType } from "../type"

export const SchemaInfo: ISchemaInfo = {
  base: "stdJS",
  name: "Node Magician Dev",
  version: "0.0.1",
}

export const PowerSchema = CreateSchema<IPowerSchema>({
  "console.log": {
    class: "basic",
    title: "Log",
    param: [
      {
        type: SocketType.string,
        title: "content",
        optional: true,
        literal: false
      },
    ],
    template: (params) => `console.log(${params[0]})`
  },
  "string": {
    class: "basic",
    title: "String",
    param: [
      {
        type: SocketType.string,
        title: "",
        optional: true,
        literal: true
      }
    ],
    template: (params) => `"${params[0]}"`
  }
})

export const BlockSchema = CreateSchema<IBlockSchema>({
  "root": {
    class: "basic",
    title: "Start",
    param: [],
    template: (codes) => `;(function ()=>{${codes.join(";")}});`
  },
  "if": {
    class: "basic",
    title: "If",
    param: [
      {
        type: SocketType.boolean,
        title: "condition",
        optional: false,
        literal: false
      }
    ],
    template: (codes, params) => `if(${params[0]}){${codes.join(";")}}`
  }
})