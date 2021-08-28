// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, channelId, adminId } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
    if (interaction.channel.id !== channelId) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'minecraft') {
		await interaction.reply('Hold your horses!');
	} else if (commandName === 'neincraft') {
        if (interaction.user.id === adminId)
          await interaction.reply('OK!');
        else
		  await interaction.reply('Nah but.');
	} else if (commandName === 'status') {
        await interaction.reply('Server may or may not be up and running at hole.nhobb.com:25567 \nAsk to be whitelisted!');
    }
});

// Login to Discord with your client's token
client.login(token);

