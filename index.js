
/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Backend Series!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
 */

// Module
const os=require("os")

console.log(os.uptime());
console.log(os.platform());
console.log(os.freemem());
console.log(os.cpus());

if(os.platform() == 'win32'){
  console.log("low price");
}else{
  console.log("high price");
}
/*custom module,created by us
const{checkEven,checkOdd} =require("./checkEvenOdd");//cjs
checkEven(2);
checkOdd(3)*/

//External modules
const modTwo =require("modulous-two")

const isEven =modTwo("simple")

console.log(isEven(21)) //true
console.log(isEven(32))//false