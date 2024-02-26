const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Function to greet new users
async function greetNewUser(message) {
    const chatId = message.chat.id;
    const newMember = message.new_chat_member;

    if (newMember) {
        const username = newMember.username || newMember.first_name;
        console.log(`${username} joined group`);
        let greeting = `Chào mừng @${username} đến với cộng đồng OXOA VIỆT NAM - Team NSB 💲💲💲\n\n`;

        greeting += `OxOa contract: 0xDC2Db003Be75D4e2a2F1d00B9efC91c00B8D814B\n\n`;
        greeting += `Contact support : @NSBMDD @Scatblue\n\n`;
        greeting += `Link tài liệu : https://t.me/oxoavn/2941\n\n`;

        const opts = {
            parse_mode: 'HTML',
        }
        await bot.sendMessage(chatId, greeting, opts);
    }
}

// Subscribe to "new_chat_member" updates
bot.on('new_chat_members', greetNewUser);

