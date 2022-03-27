import { Message } from 'discord.js';

export default class AutoResponderController {

    public handle = (message: Message) => {
        const content = message.content.toLowerCase();;
        const author = message.author;

        if (content.indexOf('go far left') > -1) {
            message.channel.send('<@!'+ author.id +'> /n https://tenor.com/view/we-dont-do-that-here-black-panther-tchalla-bruce-gif-16558003' );
            return;
        }
    
        if (content.indexOf('no u') > -1) {
            return message.channel.send('no uuuuuuu '.toUpperCase() + ' <@!'+ author.id +'>');
        }
    
        if ((content.indexOf('water') > -1) || (content.indexOf('thirsty') > -1)) {
            return message.channel.send('A famous quote by <@473869089358610456> `Where are the wa\'a maps in this game??`');
        }
    
        if (content.indexOf('trash') > -1) {
            return message.channel.send('no u' + ' <@!'+ author.id +'>');
        }
    
        if (content.indexOf('beans') > -1) {
            const random = this._randomIntFromInterval(1,2);
            if (random === 1) {
                return message.channel.send('`You haven\'t lived mate, beans on toast is actually really good, make sure plenty of butter on the bread. It\'s actually better than most french foods.` - <@473869089358610456>');
            }

            if (random === 2) {
                return message.channel.send('<@473869089358610456> \n https://tenor.com/view/beans-bean-me-up-scotty-baked-beans-gif-24562100');
            }
        }
    
        if (content.indexOf('cks') > -1) {
            return message.channel.send('<@!'+ author.id +'> \n https://tenor.com/view/we-dont-talk-about-such-things-joey-gladstone-dave-coulier-fuller-house-we-dont-mention-that-gif-17868280');
        }
    
        if (content.indexOf('how to get a girlfriend?') > -1) {
            return message.channel.send('<@!'+ author.id +'> \n go to onlyfans');
        }
    
        if (content.indexOf('<@!667471487778816030>') > -1) {
            return message.channel.send('<@!'+ author.id +'> HOW DARE YOU MENTION OUR SUPREME LEADER!!!!');
        }
    
        if (content.indexOf('<@!541043919086157859>') > -1) {
            return message.channel.send('The one and only god, the god of thunder, master of all FPS games <@!541043919086157859>');
        }
    
        if (content.indexOf('<@!693631008615956499>') > -1) {
            return message.channel.send('<@!'+ author.id +'> \n https://tenor.com/view/welcome-to-city-wok-can-i-take-order-please-tuong-lu-kim-south-park-what-do-you-want-gif-22089574');
        }

        if (content.indexOf('<@!753215733411872779>') > -1) {
            return message.channel.send('<@!'+ author.id +'> \n https://tenor.com/view/swedish-sweden-flag-gif-4719521');
        }

        if (content.indexOf('<@!434794221904592897>') > -1) {
            return message.channel.send('<@!'+ author.id +'> \n https://tenor.com/view/urosch-renault-maxi-turbo-maximum-attack-gif-15183993');
        }
    }

    private _randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}