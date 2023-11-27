import { IArchive, IFile, IFileArch, IProgram } from "../type";
import { vector2 } from "../vector";

export function InitProgram(archive: IArchive){
  let file: IFile;
  Program = {
    programInfo: archive.programInfo,
    files: new Map(),
  }

  for(let fileName in archive.files){
    Program.files.set(fileName, {
      nodes: new Map(),
      blocks: new Map(),
      literals: new Map()
    });

    file = Program.files.get(fileName) as IFile;
    for(let node in archive.files[fileName].nodes){
      file.nodes.set(node, archive.files[fileName].nodes[node]);
    }
    for(let block in archive.files[fileName].blocks){
      file.blocks.set(block, archive.files[fileName].blocks[block]);
    }
    for(let literal in archive.files[fileName].literals){
      file.literals.set(literal, archive.files[fileName].literals[literal]);
    }
    
    file.nodes.forEach((node) => {
      node.position = new vector2(node.position.x, node.position.y);
    })
    file.blocks.forEach((block) => {
      block.position = new vector2(block.position.x, block.position.y);
    })
  }
}

export let Archive: IArchive;
export let Program: IProgram;

const dev_ProgramArchive: IArchive = {
  programInfo: {
    schemaInfo: {
      base: "stdJS",
      name: "Node Magician Dev",
      version: "0.0.1",
    },
    title: "Hello World",
    author: "nahco3-code",
    version: "0.0.1",
    description: "Hello world by node magician.",
  },
  files: {
    index: {
      nodes: {
        1701008241657: {
          schema: "console.log",
          position: new vector2(0, 0),
          params: ["1701008241660"],
          next: "1701008467627",
        },
        1701008241660: {
          schema: "string",
          position: new vector2(-10, -10),
          params: ["1701008241670"],
          next: null
        },
        1701008467627: {
          schema: "console.log",
          position: new vector2(20, 0),
          params: ["1701008467630"],
          next: null,
        },
        1701008467630: {
          schema: "string",
          position: new vector2(10, -10),
          params: ["1701008467640"],
          next: null,
        }
      },
      blocks: {
        1701008240660:{
          schema: "root",
          position: new vector2(-20, 0),
          params: [],
          interNext: "1701008241657",
          next: null,
        }
      },
      literals: {
        1701008241670: {value: "Hello World!"},
        1701008467640: {value: "[from Node Magician]"},
      }
    }
  }
}
export const dev_ProgramArchiveJSON = JSON.stringify(dev_ProgramArchive);  