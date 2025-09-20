
 const fs= require("fs")
 const crypto =require("crypto")

crypto.randomBytes(1024,(err,tuf)=>{
    fs.writeFileSync("./data.txt",tuf)
})
/*read the file data.txt in async way
console.log("Before read opreation")
fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log("After read opreation")
 */
// read file in sync way

console.log("Before read opreation")
let data= fs.readFileSync("./data.txt","utf-8")
console.log(data)
console.log("After read opreation")
 