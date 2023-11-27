// import { IBlock, IData, IFile, IPower, NodeId } from "../type";
// import { BlockSchema, DataSchema, PowerSchema } from "./schema";

// export function ComplieData(file: IFile, node: IData){
//   let schema = DataSchema.get(node.schema);
//   let params: (string|null)[] = []
//   let param;

//   // 填入参数
//   node.params.forEach((id) => {
//     if(!id){
//       params.push(null);
//       return;
//     }
//     param = file.datas.get(id);
//     if(!param){
//       params.push(null);
//       return;
//     }
//     params.push(ComplieData(file, param))
//   })

//   return schema?.template(params, node.literals)??null;
// }

// export function CompliePower(file: IFile, node: IPower){
//   let schema = PowerSchema.get(node.schema);
//   let params: (string|null)[] = [];
//   let param;
  
//   node.params.forEach((id) => {
//     if(!id){
//       params.push(null);
//       return;
//     }
//     param = file.datas.get(id);
//     if(!param){
//       params.push(null);
//       return;
//     }
//     params.push(ComplieData(file, param));
//   })

//   return schema?.template(params);
// }

// export function ComplieBlock(file: IFile, block: IBlock){
//   let schema = BlockSchema.get(block.schema);
//   let codes: string[] = [];
//   let params: (string|null)[] = [];
//   let param;
//   let opNodeId = block.firstNode;
//   let opNode;

//   block.params.forEach((id) => {
//     if(!id){
//       params.push(null);
//       return;
//     }
//     param = file.datas.get(id);
//     if(!param){
//       params.push(null);
//       return;
//     }
//     params.push(ComplieData(file, param));
//   })

//   while(opNodeId != null){
//     opNode = file.powers.get()
//   }

//   return schema?.template(codes, params)??""
// }

