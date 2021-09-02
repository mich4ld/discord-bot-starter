import { config } from 'dotenv';
config();
import { DiscordBot } from '@mich4l/discord-base';

import { ExampleCommand } from './commands/example.command';
import { MessageDelete } from './events/messageDelete.event';

const discordBot = new DiscordBot({
    activity: 'GTA: San Andreas',
});

discordBot
    .addCommand('example', ExampleCommand)
    .addEvent('messageDelete', MessageDelete)
