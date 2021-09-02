import { EventHandler, Handler } from "@mich4l/discord-base";
import { Message } from "discord.js";

@Handler()
export class MessageDelete implements EventHandler {
    handle(msg: Message) {
        msg.channel.send('You removed message');
    }
}
