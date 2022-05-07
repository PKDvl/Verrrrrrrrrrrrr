const { MessageButton, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = async (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton() && !interaction.isSelectMenu()) return;
    var { guild, message, channel, member, user } = interaction;

    if (interaction.isSelectMenu()) {
      if (interaction.values[0] === "verify") { 
        const role = `966394174041641159`;
        interaction.member.roles.add(role)
        interaction.reply({ content: `${client.allEmojis.y} You are verified on **${interaction.guild.name}**!`, ephemeral: true })
      }
      // } else {
      //   const role = interaction.values[0];

      //   if (interaction.member.roles.cache.has(role)) return interaction.reply({ content: `${client.allEmojis.x} You are aldready have the role\nSorry, It cannot be removed\n\n**${interaction.guild.name}** ` });

      //   interaction.reply({ content: `${client.allEmojis.y} You are now unlocked for Vcodez Development!`, ephemeral: true })
      //   interaction.member.roles.add(role)
      //   // client.channels.cache.get(`928335084879224852`).send(`<:rjoin:921764949116723291> **${interaction.user} Welcome to \`Vcodez Development!\`**\n> Read <#896934590072102943>!\n> Chat in <#928753729556078674> and use bots in <#928334734487093269>!`)

      // }
    }
  })


}
