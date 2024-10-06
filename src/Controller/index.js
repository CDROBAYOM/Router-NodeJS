const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter')
const geminiRouter = require('./geminiRouter')
const telegramRouter = require('./telegramRouter');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter)
  router.use('/users',usersRouter)
  router.use('/categories', categoriesRouter)
  router.use('/geminiBot',geminiRouter)
  router.use('/telegramBot',telegramRouter)
}

module.exports = routerApi;
