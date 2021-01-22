import {flag,sum,name} from './aaa.js';
import {Person} from "./aaa.js";
// 导入default
import addr from "./aaa.js"
console.log(addr)

if(flag)
  console.log(sum(10,100))

console.log(name)

let p =new Person()
p.run()

// 全部直接导入
import * as aaa from './aaa.js'
aaa.name
