const { Client, Intents, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config({ path: './config/.env' });
const { updateBot } = require('./updatePrice.js');
const keepAlive = require ("./keepAlive.js");

//This Bot works for tokens listed on coingecko or Solana SPL tokens visible on https://www.jup.ag


//IMPORTANT THINGS TO UPDATE---------------------------

//! ADD A KEY NAMED "DISCORD_TOKEN" (WITHOUT QUOTES...) IN THE .ENV FILE INSIDE THE CONFIG FOLDER. THE VALUE SHOULD BE YOUR BOT APPLICATION TOKEN.


const inputs={
  
  USE_COINGECKO_PRICING: true, //If USE_COINGECKO_PRICING: false, the bot will use Jupiter Aggregator pricing (Solanatokens only)

  TOKEN_NAME: "star-atlas", //REQUIRED for Coingecko pricing.  Must match coingecko coin URL name: e.g. solana for https://www.coingecko.com/en/coins/solana. 
  
  TOKEN_SYMBOL: "ATLAS",

  WATCHING: "Atlas"  //Change string to define "WATCHING" text.
};

//-------------------------------------------------------------

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

client.once('ready', () => {
  console.log("Prices Online...Lets's go go go...!!");
  
  updateBot(inputs, client);

  
  client.user.setPresence({ activities: [{ name: inputs.WATCHING, type: ActivityType.Watching }] });


  setInterval(function(){
    updateBot(inputs, client);
   }, 1000*60*1) //Update price every 1 minutes


  });

keepAlive();

  client.login(process.env.DISCORD_TOKEN);

