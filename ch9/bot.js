require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { HfInference } = require('@huggingface/inference');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот на основе GPT-Neo. Как я могу помочь?');
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === '/start') return;

    try {
        const response = await hf.textGeneration({
            model: 'EleutherAI/gpt-neo-1.3B',
            inputs: msg.text,
            parameters: {
                max_length: 150,
                num_return_sequences: 1,
            },
        });

        const botResponse = response[0].generated_text;
        bot.sendMessage(chatId, botResponse);
    } catch (error) {
        console.error('Ошибка при генерации текста:', error);
        bot.sendMessage(chatId, 'Извините, произошла ошибка при обработке вашего запроса.');
    }
});
