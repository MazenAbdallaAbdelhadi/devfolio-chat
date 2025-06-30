import { REST } from '@discordjs/rest';
import {
  Routes,
  APIEmbed,
} from "discord-api-types/v10"

// Initialize Discord REST client
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN ?? "");


export async function sendEmbed(embed: APIEmbed) {
  try {
    const channelId = process.env.DISCORD_CHANNEL_ID;

    
    if (!channelId) {
      throw new Error('DISCORD_CHANNEL_ID is not set in environment variables');
    }

    if (!process.env.DISCORD_BOT_TOKEN) {
      throw new Error('DISCORD_BOT_TOKEN is not set in environment variables');
    }

    return rest.post(Routes.channelMessages(channelId),{
      body:{embeds: [embed]}
    })

  } catch (error) {
    console.error('Error sending Discord message:', error);
    throw error;
  }
}
