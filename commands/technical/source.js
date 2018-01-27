const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let embed = new Discord.RichEmbed()
        .setColor('#50BB7C')
        .addField('Github', 'https://github.com/NicksWorld/DiscordEconomy')
        addFooter(embed, bot, message, command, args);
        return message.channel.send(embed);
}

module.exports.help = {
    names: ['source'],
    usage: 'e-source',
    description: 'Get my source code'
}