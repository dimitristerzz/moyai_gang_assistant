import passkey from './passkeys.json' assert {type: 'json'};
import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', () => {
    console.log(`✅ ${client.user.username} is up and running!`)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'ping') {
        message.reply(':ping_pong: ')
    }
})

client.login(passkey.token);