require('dotenv').config();
const { REST, Routes } = require('discord.js')

const commands = [
    {
        name: 'ping',
        description: 'Pong'
    },
    {
        name: 'help',
        description: 'Help command'
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.clientid,
                process.env.guildid,
            ),
            { body: commands }
        )

        console.log('Slash commands were registered successfully');
    } catch (error) {
        console.log(`An error occured: ${error}`);
    }
})();