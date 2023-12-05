AtlasPrice-Discord-Bot is a Discord bot written in Node.js. It fetches real-time price information for various cryptocurrencies directly from CoinGecko or the Jupiter Aggregator for Solana SPL tokens. It's the perfect bot for crypto enthusiasts or Solana token trackers wishing to keep an eye on their favourite coins!

Getting Started
These instructions will guide you on how to set up and run AtlasPriceBot on your local machine.

Prerequisites
You will need Node.js and npm installed on your machine. 

Additionally, you will need to install following Node.js packages:

discord.js
dotenv

You can install these by running the following command in your terminal:

npm install discord.js dotenv

Setup
Clone this repository.

To setup your bot, create a bot application on the Discord Developer Portal. Make note of your bot token and Discord server ID, as you'll need them in the next step.

Inside the /config directory, rename .env.sample to .env.

Open the .env file and add to "DISCORD_TOKEN" with your Discord bot token and add the SERVER_ID with your discord server id.

Configure your bot settings in the inputs object located in atlas.js. Here you can specify the USE_COINGECKO_PRICING setting (if set to false, it'll use Jupiter Aggregator pricing), TOKEN_NAME, TOKEN_SYMBOL, and WATCHING setting to define what the bot is "watching".

Running the Bot
Run your bot with the following command:

node atlas.js


Once successfully running, your bot should log "Prices Online... Let's go go go...!!" into the console.
