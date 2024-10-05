const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

// Conexión con gemini-AI
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyAl1EnkrOQSV7rBXkm9qYt0KrybaXnVLCM');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });



// Parser to JSON
router.use(bodyParser.json());


// Metodo POST
router.post('/', async (req, res) => {

  const body = JSON.stringify(req.body);
  console.log('Body =>', body);

  if(inputMessage(body)){
    const responseAi = await obtenerRespuestaDeGemini("Saludo informal colombiano");
    console.log('Response: ' + responseAi);
    res.json(responseAi);
  }else{
    const responseAi = await obtenerRespuestaDeGemini(body);
    console.log('Response: ' + responseAi);
    res.json(responseAi);
  }
});


// Metodo para el consumo con la AI
async function obtenerRespuestaDeGemini(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// Evaludar saludo entrante
function inputMessage(inputMessage){
  if(inputMessage === "Hola"){
    return true;
  }else{
    return false;
  }
}

module.exports = router;
