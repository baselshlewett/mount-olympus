import { EmbedFooterData, MessageEmbed, MessageMentions } from "discord.js";

export default class Controller {

    public mentionUser(id: string): string {
        if (!id || !parseInt(id)) {
            return '';
        }

        return `<@!${id}>`;
    }

    public extractUserMention(string: string): string {
        const matches = string.matchAll(MessageMentions.USERS_PATTERN).next().value;

        // If supplied variable was not a mention, matches will be null instead of an array.
        if (!matches) return '0';

        // The first element in the matches array will be the entire mention, not just the ID,
        // so use index 1.
        return matches[1];
    }
}