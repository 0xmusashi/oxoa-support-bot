const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const CONTRACT_ADDRESS = '0xDC2Db003Be75D4e2a2F1d00B9efC91c00B8D814B';
const REF_LINK = 'https://node.oxoa.games?ref=0x3E657D3CF4cb2104E6A5a6eD6f19aE23d8869999';

// Function to greet new users
async function greetNewUser(message) {
    const chatId = message.chat.id;
    const newMember = message.new_chat_member;

    if (newMember) {
        const username = newMember.username || newMember.first_name;
        console.log(`${username} joined group`);
        let greeting = `<b>Chào mừng @${username} đến với cộng đồng OXOA VIỆT NAM - Team NSB 💰💰💰</b>\n\n`;
        const CONTRACT_URL = `https://explorer.zksync.io/address/${CONTRACT_ADDRESS}`
        greeting += `<b>🌐 $isOxOa contract 👉 <a href="${CONTRACT_URL}">xem tại đây</a></b>\n\n`;
        greeting += `<b>👨‍⚕️ Hỗ trợ: @NSBMDD @Scatblue</b>\n\n`;
        greeting += `<b>💻 Hướng dẫn 👉 <a href="https://t.me/oxoavn/2941">xem tại đây</a></b>\n\n`;
        greeting += `<b>🤑 Mua key 👉 <a href="${REF_LINK}">tại đây</a></b>\n\n`;

        const opts = {
            parse_mode: 'HTML',
        }
        await bot.sendMessage(chatId, greeting, opts);
    }
}

// Subscribe to "new_chat_member" updates
bot.on('new_chat_members', greetNewUser);

