require('dotenv').config();
const { Client, IntentsBitField, ActivitityType, ActivityType } = require('discord.js');

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

    client.user.setActivity({
        name: "you through your closet",
        type: ActivityType.Watching
    })
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply(':ping_pong:')
    }

    if (interaction.commandName === 'help') {
        interaction.reply('shut your bitch ass mouth up')
    }
})

client.login(process.env.token);