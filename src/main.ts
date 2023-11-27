import { InitProgram, Program, dev_ProgramArchiveJSON } from "./core/loader"

;(function(){
  InitProgram(JSON.parse(dev_ProgramArchiveJSON));
  console.log(Program)
})();