import { CreateBlockSchema, CreateDataSchema, CreateNodeSchema, ISchemaInfo, LiteralType, SocketType } from "../type"

export const SchemaInfo: ISchemaInfo = {
  base: "stdJS",
  title: "Node Magician Dev",
  version: "0.0.1",
}

export const NodeSchema = CreateNodeSchema({
  "console.log": {
    class: "basic",
    title: "Log",
    param: [
      {
        type: SocketType.string,
        title: "content",
        optional: true,
      },
    ],
    template: (params) => `console.log(${params[0]})`
  }
})

export const DataSchema = CreateDataSchema({
  "string": {
    class: "basic",
    title: "String",
    param: [],
    literal: [
      {
        type: LiteralType.string,
        title: "content"
      }
    ],
    template: (params) => `"${params[0]}"`
  }
})

export const BlockSchema = CreateBlockSchema({
  "root": {
    class: "basic",
    title: "Start",
    param: [],
    template: (codes, params) => `;(function ()=>{${codes.join(";")}});`
  },
  "if": {
    class: "basic",
    title: "If",
    param: [
      {
        type: SocketType.boolean,
        title: "condition",
        optional: false
      }
    ],
    template: (codes, params) => `if(${params[0]}){${codes.join(";")}}`
  }
})