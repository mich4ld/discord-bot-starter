import { Service } from "@mich4l/discord-base";

@Service()
export class ExampleService {
    getMessage() {
        return 'Hello world';
    }
}
