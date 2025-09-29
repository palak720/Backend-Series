
/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Backend Series!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
 */

/* Module
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
checkOdd(3)

//External modules
const modTwo =require("modulous-two")

const isEven =modTwo("simple")

console.log(isEven(21)) //true
console.log(isEven(32))//false*/


// HTTP & Server
/* const os =require("os")
const http=require("http")
// data---> data.txt
console.log(http)

const server=http.createServer((req,res)=>{
    if(req.url =="/home"){
      
      res.setHeader("content-type","text/html")
      res.statusCode =200;
        res.end(`<h1>Welcome to Home Page</h1>`)
    }else if(req.url =="/contactus"){
      res.setHeader("content-type","text/html")
      res.statusCode =200;
      res.write("This is \n")
      res.write("contact us \n")
      res.end("page")
    }
    else if(req.url =="/data")
      fs.readFile("./data.txt","utf-8",(err,data)=>{
    res.setHeader("content-type","text/html")
      res.statusCode =200;
    res.end(`<h3>${data}</h3>`)
  })
    else{
      res.end("This is the other page")
    }
  })



server.listen(5000,() =>{
  console.log("server started")
})

//console.log(os.cpus().length) */

/*CRUD Operations

const http = require('http');
const fs = require("fs")
const server = http.createServer((req,res)=>{
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    if(req.url ="/"){
      res.end("This is the home page")
    }
      // GET the todos
      else if(req.url =="/todos" && req.method =="GET"){
       res.setHeader("content-type","application/json")
        res.end(JSON.stringify(data))
    }
     // post the todos
    else if(req.url == "/todos" && req.method == "POST"){
        //logic to insert code
        //console.log(data)
        let body = ""
        req.on("data",(data)=>{
         body += data;
        })
        req.end("end",()=>{
            //console.log(body)
            body =JSON.parse(body)
             let newId = data.todos[data.todos.length-1].id+1
        //console.log(id)
            data.todos.push(body);
            fs.writeFileSync("./db.json",JSON.stringify(data))
            //console.log(data)
            res.end("todos added...")
        })
      }

      // update todos
      else if(req.url.includes("/todos/update/1")&& req.method == "PATCH"){
        //console.log(req.url.split("/")[3])
        let todoId = req.url.split("/")[3]
        let body = "";
        req.on("data", (data)=>{
            body += data
        })
         req.on("end", ()=>{
            body = JSON.parse(body)
            let updatedTodos= data.todos.map((el,i)=>{
                if(el.id == todoId){
                    return {...el,...body}
                }else{
                    return el
                }
            })
            data.todos = updatedTodos
            console.log(updatedData)
            //console.log(data)
            fs.writeFileSync("./db.json", JSON.stringify(data))
         })
        res.end("todos updated")
      }

      // delete todos
       else if(req.url.includes("/todos/delete/") && req.method=="DELETE"){
        let todoId = req.url.split("/")[3]
        let filtredTodos= data.todos.filter((el,i)=> el.id != todoId)
        data.todos = filtredTodos
        fs.writeFileSync("./db.json", JSON.stringify(data))
        res.end("Todo Deleted")
    }

    else{
      res.end("This is the other page")
    }
})

server.listen(8081,()=>{
  console.log("server started")
})*/


// Express learn

const express =require("express");
const app =express();
const cors =require("cors")
const fs =require("fs");
app.use(express.json());
app.use(cors());

//app.<Method Name>("/<endpoint>",(cbf))

app.get("/home",(res,req)=>{
  res.send("This is the home page")
})

app.get("/contactus",(req,res)=>{
  res.send("This is the contactus page")
})
app.post("/todos",(req,res)=>{
  //directly we get req.body
  //console.log(req.body)
  let id=Date.now();
  let todos ={...req.body,id}
  let data =JSON.parse(fs.readFileSync("./db.json","utf-8"));
  data.todos.push(req.body);
  fs.writeFileSync("./db.json",JSON.stringify(data))
  res.send("todo added")
})

app.get("/todos",(req,res)=>{
  let data =JSON.parse(fs.readFileSync("./db.json","utf-8"));
  //sending is the form of json
  //or else browser will throw error is case of frontend
  res.json({msg:"Here is the list of the todos",todos: data})
});

// we catched the todo by its id and did the updation
app.patch("/todos/:id", (req,res)=>{
  //console.log(req.params)
  //req.body is the  todos updated details
  let todoId =req.params.id
  let data =JSON.parse(fs.readFileSync("./db.json","utf-8"));
  let updatedTodos = data.todos.map((el,i)=>{
    if(el.id == todoId){
      return{...el,...req.body}
    }else{
      return el;
    }
  })

  data.todos=updatedTodos;
   fs.writeFileSync("./db.json",JSON.stringify(data));
   res.send("todo updated");
})

app.delete("/todos/delete/:id",(req,res)=>{
  let todoId =req.params.id
  let data =JSON.parse(fs.readFileSync("./db.json","utf-8"));
  let filtredTodosTodos = data.todos.filter((el,i)=> el.id  !=todoId)
   data.todos= filtredTodos;
   fs.writeFileSync("./db.json",JSON.stringify(data));
   res.send("todo deleted")
  })



app.listen(8080,()=>{
  console.log("server started")
})
