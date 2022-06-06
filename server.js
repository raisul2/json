const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("./db.json")
const middlewere = jsonServer.defaults({
    static: "./build"
})

const port = process.env.PORT || 4000
server.use(middlewere)
server.use(
  
    jsonServer.rewriter({
        "/api/*":"/$1",
    })

)

server.use(router)
server.listen(port, () =>{
    console.log(`server is runing on port ${port}`)
})