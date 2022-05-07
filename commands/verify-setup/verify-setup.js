const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
    Client,
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
} = require('discord.js');

module.exports = {
    name: "ver",
    aliases: ['verify'],
    description: "The Verify Setup",
    cooldown: 0,
    userPermissions: "ADMINISTRATOR",
    botPermissions: "ADMINISTRATOR",

    async execute(client, message, args, ee) {
        try {
            const row = new MessageActionRow()
                .addComponents([
                    new MessageSelectMenu()
                        .setCustomId("MessageSelectMenu")
                        .setPlaceholder(`Pick some roles / Enable notifications`)
                        .addOptions(
                            {
                                value: "verify",
                                label: "Verify",
                                description: `Get verified on Oru Community!`,
                                emoji: "971820038304727141"
                            }
                        )
                        .setMaxValues(1)
                        .setMinValues(1)
                ])
            message.delete()
            const VerifyEmbed = new MessageEmbed()
                .setTitle(`Verify`)
                .setDescription(`Verify yourself by gaining <@&966394174041641159> | Grab the <a:verify:971820038304727141> Role from the below menu.\n\n`)
                // .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({
                //     dynamic: true
                // })})
                .setColor(ee.grn)
                .setThumbnail(`https://cdn.discordapp.com/attachments/971821743473840158/971821810091982868/parfum.png`)
                .addField(`${client.allEmojis.red}Can't gain the role..?`, `Directly message one of the online <@&966413390429949963> mamber.`)


            message.channel.send({
                embeds: [VerifyEmbed],
                components: [row]
            });
        } catch (e) {
            console.log(e)
        }
    }
};

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/milanio
 * @INFO
 * Work for Milanio Development | https://discord.gg/milanio
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */