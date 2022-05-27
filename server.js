const jsonServer = require('json-server')
const router = jsonServer.router('data.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const swaggerUI=require('swagger-ui-express')
const swaggerDocumant = require('./swag.json')
const auth = require('json-server-auth')
var cors = require("cors")
const rules = auth.rewriter({
  users: 600,
  messages : 640,
  
})
server.db = router.db

server.use(cors())
server.use(rules)
server.use(auth)
server.use(middlewares)
server.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocumant))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})