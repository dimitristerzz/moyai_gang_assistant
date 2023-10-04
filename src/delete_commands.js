require('dotenv').config();
const { REST, Routes } = require('discord.js')

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
    try {
        console.log('Deleting slash command...');

        await rest.delete(
            Routes.applicationGuildCommand(
                process.env.clientId,
                process.env.guildId,
                "1159234246892859443"
            )
        )
    
        console.log('Slash command was deleted successfully');
    } catch (error) {
        console.log(`An error occured: ${error}`);
    }
})();