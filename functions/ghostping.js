async function ghostPing(message, options = {}){
    const { MessageEmbed } = require('discord.js') 
    if(!message) throw new Error('"message" is not defined')

    if(message.mentions.users.first()) {
        const embed = new MessageEmbed()
        .setTitle(options.embedTitle || "👻 Ghost Ping")
        .setColor(options.embedColor || "RANDOM")
        .setDescription(`${message.author.tag} ghost pinged ${message.mentions.users.first()}`)
        return message.channel.send({embeds: [embed]})
    }    


}
module.exports = ghostPing