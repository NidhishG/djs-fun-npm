const { MessageEmbed } = require('discord.js')
async function iTunes(message, args, options = {}) {
    if (!message) throw new Error('djs-fun Err: "message" is not defined')
    if (!args) throw new Error('djs-fun Err: "args" is not defined')

    let song = args.join(" ")
    const { MessageEmbed } = require('discord.js')
            const axios = require(`axios`)
            const body = await axios.get(`https://api.popcatdev.repl.co/itunes?q=${song}`)
            const res = body.data
            
            const embed = new MessageEmbed()
            .setColor('ff0000')
            .setThumbnail('https://cdn.discordapp.com/attachments/851508427531878451/859835360388579348/1200px-ITunes_logo.svg.png')
            .setTitle('iTunes!')
            .setDescription(`Giving info from iTunes for \`${song}\``)
            .addField('**Song:**', `${res.name}`, inline = true)
            .addField('**Artist:**', `${res.artist}`, inline = true)
            .addField('**Album:**', `${res.album}`, inline = true)
            .addField('**Release Date:**', `${res.release_date}`, inline = true)
            .addField('**Price:**', `\`${res.price}\``, inline = true)
            .addField('**Length:**', `\`${res.length}\``, inline = true)
            .addField('**Genre:**', `${res.genre}`, inline = true)
            .addField('**URL:**', `${res.url}`, inline = true)
    message.channel.send({embeds: [embed]})
    
    
}

module.exports = iTunes;
