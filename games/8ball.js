var math = require("mathjs");

exports.eightball = function(msg) {
	response = [
		"It is certain.",
		"It is decidedly so.",
		"Without a doubt.",
		"Yes, definitly",
		"You may rely on it",
		"As I see it, yes",
		"Most likely",
		"Outlook is good",
		"Yes",
		"Signs point to yes",
		"Reply is hazy, try again later",
		"Ask again later",
		"Better not tell you now",
		"Cannot predict now, try again later",
		"Concentrate harder and ask again",
		"Don't count on it",
		"My reply is... no",
		"My sources say no",
		"Outlook is not so good",
		"Very doubtful"
	]
	
	msg = msg.toLowerCase();
	msgArray = msg.split(" ");
	console.log(msgArray);
	
	if (msgArray.length < 2) {
		
		return "Don't just say 8ball... Ask me a question!"
	
	} else if(msgArray[1] === "what") {
		
		return "I am sorry, I can't answer that question :/.";
	
	} else {

		randoIndex = math.floor(math.random(0, response.length));
		console.log(randoIndex + " - " + response[randoIndex]);
		return response[randoIndex];	
	}
}