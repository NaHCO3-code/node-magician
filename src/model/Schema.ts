import { CreateSchema, DataType, IDataSchema, IPowerSchema } from "../type";

export const PowerSchema = CreateSchema<IPowerSchema>({
  "console.log": {
    title: "log",
    class: "basic",
    param: [
      {
        title: "content",
        type: DataType.string,
        optional: true,
        literal: false
      }
    ],
    value: null,
    template: (params) => `console.log(${params[0]})`,
  }
});

export const DataSchema = CreateSchema<IDataSchema>({
  "string": {
    template: (input) => `"${input}"`
  }
})