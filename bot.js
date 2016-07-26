var Discord = require("discord.js");
var Eightball = require("./games/8ball.js");
var config = require("config.js");

var bot = new Discord.Client({autoReconnect: true});
var ready = false;
var lastChannel = null;

bot.on('ready', function(channel) {
	console.log("Successfully connected!");
	ready = true;
})

bot.on("message", function(msg) {
	prefix = "!";
	if (msg.content.startsWith(prefix)) {
		
		if (msg.content.startsWith("!becky")) {becky()};
		if (msg.content.startsWith("!8ball")) {
			bot.sendMessage(msg.channel.id, Eightball.eightball(msg.content));
		};

	} else
		return;

});

bot.on("voiceJoin", function(channel, user) {
	if (ready) {
		//200813122536210432 = voice-history channel ID
		console.log(user.name + " joined " + channel.name);
		bot.sendMessage("200813122536210432", user.name + " joined " + channel.name);
	}
});

bot.on("voiceLeave", function(channel, user) {
	if (ready) {
		//200813122536210432 = voice-history channel ID
		console.log(user.name + " left " + channel.name);
		//bot.sendMessage("200813122536210432", user.name + " left " + channel.name);
	}
});

function becky() {

	var prefix = "!becky";
	
	if(message.author.equals(bot.user) || message.author.bot) return;

	if (message.channel.name == 'bot-testing' & message.content.toLowerCase().startsWith(prefix)) {
		console.log("I should Respond");
		bot.sendMessage(message.channel.id, "I know you want more... but I can't provide more right now :(", function(error) {
			console.log(error);
		});
	} else {
		return;
	}
	//bot.reply(message, "Hey " + message.author.username);
	//bot-testing channel ID = 200779084010225664
	//voice-history channel ID = 200813122536210432
}


//Start the Bot
bot.loginWithToken(config.discord.token);