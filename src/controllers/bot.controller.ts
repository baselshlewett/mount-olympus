import AutoResponderController from './auto-responder.controller';
import CommandsController from './commands.controller';
import { Awaitable, Client, Intents, Message, MessageEmbed, TextChannel } from 'discord.js';

export default class BotController {

    private PREFIX = process.env.COMMAND_PREFIX || '!';

    private intents = [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ];

    private client: Client;

    constructor() {
        this.client = new Client({ intents: this.intents });

        this.client.on('ready', () => {
            if (process.env.ENV === 'prod') {
                this._sendOnlineStatus();
            }
        });

        this.login();

        this.handleMessage();
    }

    public handleMessage = () => {
        this.client.on('messageCreate', (message: Message): Awaitable<void> => {
            if (message?.author?.bot) {
                return;
            }
        
            if (message.content.toLowerCase().startsWith(this.PREFIX)) {
                const commands = new CommandsController();
                commands.handle(message);
                return;
            }
        
            const responder = new AutoResponderController();
            responder.handle(message);
            return;
        });
    }

    public login = () => {
        this.client.login(process.env.DISCORDJS_BOT_TOKEN);
    }

    private _sendOnlineStatus(): void {

        const embed: MessageEmbed = new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Status')
        .setDescription(`${this.client?.user?.username} is online`);

        ( this.client.channels.cache.get('957203422661210142') as TextChannel ).send({ embeds: [embed] })
    }
}