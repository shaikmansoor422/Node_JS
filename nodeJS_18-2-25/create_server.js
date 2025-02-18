const http = require("http")
const server = http.createServer((req,res)=>{
res.write("Me*  Creating server --->")
res.end(" NodeJS be like* Raatledaaaa.....? ")
})
server.listen("3101",()=>{
    console.log("server is succefully created")
})
