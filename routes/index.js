const express = require('express');
const productsRouter = require("./products.router")


//const usersRouter = require("./users.router")

function routerApi(app){
  const router = express.Router()
  app.use("/api/v1",router)
  router.use("/pokemones",productsRouter)
  //app.use("/users",productsRouter)

}



module.exports = routerApi;
