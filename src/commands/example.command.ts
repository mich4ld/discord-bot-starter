import { CommandHandler, Handler } from "@mich4l/discord-base";
import { Message } from "discord.js";
import { ExampleService } from "../services/example.service";

@Handler()
export class ExampleCommand implements CommandHandler {
    constructor(
        private readonly exampleService: ExampleService,
    ) {}

    handle(msg: Message) {
        const message = this.exampleService.getMessage();
        msg.reply(message);
    }
}
