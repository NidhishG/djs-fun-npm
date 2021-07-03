const { MessageEmbed } = require('discord.js')
async function npm(message, args, options = {}) {
    if (!message) throw new Error('djs-fun Err: "message" is not defined')
    if (!args) throw new Error('djs-fun Err: "args" is not defined')
    
    const pkg = args.join(" ")
    if(!pkg) return message.reply('Give me a package name to search')
    const axios = require('axios')

    const body = await axios.get(`https://api.tovade.xyz/v1/info/npm?package=${pkg}`)
    const res = body.data

    const embed = new MessageEmbed()
    .setColor(options.embedColor || 'ff0000')
    .setTitle(options.embedTitle || 'NPM Search')
    .setURL(`https://npmjs.org/${pkg}`)
    .setDescription(`Inving info from the NPM package ${pkg}`)
    .addField('Name:', `${pkg}`, inline = true)
    .addField('Developers:', `${res.maintainers}`, inline = true)
    .addField('Version:', `\`${res.version}\``, inline = true)
    .addField('License:', `\`${res.license}\``, inline = true)
    .addField('Created:', `\`${res.createdAt}\``, inline = true)
    .addField('Last Modified:', `\`${res.last_modify}\``, inline = true)
    .addField('Repository:', `${res.repository}`, inline = true)
    .addField('Description:', `${res.description}`, inline = true)
 message.channel.send({embeds: [embed]})
    
}

module.exports = npm;
