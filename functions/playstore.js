const { MessageEmbed } = require('discord.js')
async function playstore(message, args, options = {}) {
    if (!message) throw new Error('djs-fun Err: "message" is not defined')
    if (!args) throw new Error('djs-fun Err: "args" is not defined')

    let game = args.join(" ")

    const axios = require(`axios`)
    const body = await axios.get(`https://api.popcatdev.repl.co/playstore?q=${game}`)
    const res = body.data
    if(game){
    const embed = new MessageEmbed()
    .setTitle('Play Store!')
    .setDescription(`Giving info for ${game}`)
    .setColor(`ff0000`)
    .addField('**App:**', `${res.title}`, inline = true)
    .addField('**Company:**', `${res.developer}`, inline = true)
    .addField('**Ratings:**', `\`${res.ratings}\``, inline = true)
    .addField('**Downloads:**', `\`${res.installations}\``, inline = true)
    .addField('**Genre:**', `${res.genre}`, inline = true)
    .addField('**URL:**', `${res.url}`, inline = true)
    .addField('**One Review:**', `${res.comment}`, inline = true)
    
    message.channel.send({embeds: [embed]})
    } else return message.reply(`give me a game to search`)
}

module.exports = playstore;
