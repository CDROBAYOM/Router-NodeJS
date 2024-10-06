
require('dotenv').config();

const express = require('express');
const routerApi = require('./Controller');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
