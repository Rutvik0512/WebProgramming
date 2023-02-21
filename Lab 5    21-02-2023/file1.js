import { greeting } from "./file2.js";
//importing using alias name
import { add,multiplication as product} from "./file2.js";
// importing via default keyword
import product3 from "./file2.js"
//importing a file which has pre-defined alias name

greeting()
console.log(product(5,6))
console.log(add(20,40))
console.log(product3(3,2,8))
