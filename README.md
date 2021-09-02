# Discord bot starter
This is template for creating discord bots, based on `discord.js` and my `@mich4l/discord-base` library.

Fork this repository and clone

### Bot token
Create `.env` file and include: 
```env
DISCORD_TOKEN='your_discord_bot_token'
```
or just pass token as string in `DiscordBot` options

### Run app
```
$ npm i
$ npm run dev
```

### Build
If you want host bot on server - you need transpile TypeScript into JavaScript:
```
$ npm run build
```
