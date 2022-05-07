const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
    Client,
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
} = require('discord.js');

module.exports = {
    name: "athala-puthala-thavalachi",
    aliases: [],
    description: "",
    cooldown: 0,
    userPermissions: "",
    botPermissions: "",

    run: async (client, message, args, ee) => {
        try {
            let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
            message.guild.channels.create(message.author.username, {
                type: 'GUILD_CATEGORY', permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: role.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                ]
            })
            message.channel.send({
                content: `Role id is ${role.id} `
            })



        } catch (e) {
            console.log(e)
        }
    }
};

