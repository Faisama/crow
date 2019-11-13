const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NjQzNzUxNzk5MjY5ODgzOTA0.Xcr5qA.nZfeh4wJE9N2Ksbu6rTJ881KpkI'
bot.login(token)
bot.on('ready', () => {
    console.log('The bot is ready!')
    }
)

const prefix = '$'

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");
if(msg.content.charAt(0) === prefix && msg.member.roles.find(a => a.name === "Raven")) {
    switch (args[0]) {
        case 'ping':
            msg.channel.send('\`pong\`');
        break;
        case 'subhayu':
            msg.channel.send('\`SUCKS\`')
        break;
        case 'chayan':
            msg.channel.send('\`Badass isn\'t he? He built me! He is my DAD\`')
        break;
        case 'help':
            msg.channel.send('\`Current commands: \n $ping \n $subhayu \n $chayan \n $help \n $roll`')
            break;
        case 'roll':
            if(args[1] <=69) {
                var randnum20 = Math.floor(Math.random() * args[1]);
                msg.channel.send(`Randomly Rolled a number between 1 - ${args[1]} : \`${randnum20}\``)
            } else {
                msg.channel.send('I don\'t think i gave you more than 69 rolls.')
            }
        break;
    
    }
}
})