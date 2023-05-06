//import json server
const JsonServer = require('json-server')

// create a json server app
const server = JsonServer.create()

//set up path for db.json 
const router = JsonServer.router("db.json")

//returns middleware used by JSON Server
const middleware = JsonServer.defaults()

//set up port
const port = process.env.port || 4000

//use router , middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port),()=>{
    console.log(`json server started at port ${port}`);
}
