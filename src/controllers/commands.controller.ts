import { Message } from 'discord.js';

export default class CommandsController {
    private PREFIX = process.env.COMMAND_PREFIX || '!';

    public handle = (message: Message) => {
        const content = message.content.toLowerCase();;
        const [CMD_NAME, ...args] = content.trim().substring(this.PREFIX.length).split(/\s+/);
        
        if (!CMD_NAME.length) {
            message.channel.send("Command not found, please use the '!help' command for help in available commands");
            return;
        }

        if (CMD_NAME === 'help') {
            message.channel.send("printing help command");
            return;
        }

        if (CMD_NAME === 'pleple') {
            message.channel.send('<@&928751663026688041> let\'s goooooooooo');
            return;
        }

        if (CMD_NAME === 'burn') {
            message.channel.send('https://tenor.com/view/steven-he-asian-steven-gif-23432398');
            return;
        }

        message.channel.send("Command not found, please use the '!help' command for help in available commands");
        return;
    }

}