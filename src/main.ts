import { WorkFile } from "./controller/MFile";
import { DataNode } from "./model/MData";
import { PowerNode } from "./model/MPower";

WorkFile.powerNodes.set("1", new PowerNode({
  schema: "console.log",
  position: [0, 0],
  params: ["2"],
  prev: null,
  next: null,
}))

WorkFile.dataNodes.set("2", new DataNode({
  schema: "string",
  value: "hello"
}))

let a = WorkFile.GetNode("1");
console.log(a?.compile())