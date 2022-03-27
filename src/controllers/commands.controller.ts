import { Message, MessageAttachment, MessageEmbed, User } from 'discord.js';
import Controller from './controller';

export default class CommandsController extends Controller {
    private PREFIX = process.env.COMMAND_PREFIX || '!';

    private _commands = [
        'pleple',
        'slap',
        'burn'
    ];

    public handle = (message: Message) => {
        const content: string = message.content.toLowerCase();
        const author: User = message.author;
        const [CMD_NAME, ...args] = content.trim().substring(this.PREFIX.length).split(/\s+/);

        let replyMessage: any = '';

        switch (CMD_NAME) {
            case 'commands':
                replyMessage = this._makeCommandsList();
                break;
            case 'pleple':
                replyMessage = "<@&928751663026688041> let\'s goooooooooo";
                break;
            case 'burn':
                replyMessage = 'https://tenor.com/view/steven-he-asian-steven-gif-23432398'
                break;
            case 'slap':
                replyMessage = this._doSlap(content, args, author);
                break;
            default:
                replyMessage = "Command not found, please use the '!help' command for help in available commands";
        }

        message.channel.send(replyMessage);
        return;
    }

    private _doSlap(content: string, args: Array<any>, author: User): string {
        if (!args.length) {
            return 'You\'re a special kind of special ' + this.mentionUser(author.id) + ' aren\'t you??';
        }

        const mentionedId = this.extractUserMention(content);

        if (!mentionedId) {
            return 'What a shame!!, I couldn\'t find a user to slap!';
        }

        return this.mentionUser(author.id) + ' slaps the living shit out of ' + this.mentionUser(mentionedId);
    }

    private _makeCommandsList(): object {
        const embed: MessageEmbed = new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Commands List')
        .addFields(
            {name: '!pleple', value: 'mentions battlebots role to come play'},
            {name: '!burn', value: 'Emooootionaaaal damaaaaaaaaaage'},
            {name: '!commands', value: 'Shows available commands'},
            {name: '!slap', value: 'slaps a mentioned user'},
        );

        return { embeds: [embed] };
    }

}