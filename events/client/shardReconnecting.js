const {
  Client
} = require("discord.js");

module.exports = {
  name: "shardReconnecting",

  /**
   * @param {Client} client
   */

  async execute(client, id) {
    client.logger(`Shard #${id} Reconnecting`.brightMagenta);
  }
}

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/milanio
 * @INFO
 * Work for Milanio Development | https://discord.gg/milanio
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */