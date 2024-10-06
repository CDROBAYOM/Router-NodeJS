const express = require('express');
const router = express.Router();

// Conexión con Telegram
const TelegramBot = require('node-telegram-bot-api');
const token = '7603008419:AAElMcO05UxLvZH9ncl2aGNyvSPGyvmxlVs';
const bot = new TelegramBot(token, {polling: true});

router.get('/',  (req, res) => {

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Aquí puedes procesar el mensaje y enviar una respuesta
    bot.sendMessage(chatId, `Recibí tu mensaje: ${messageText}`);
  });

  res.send('Telegram Bot')
});

module.exports = router;

