const { MessageEmbed } = require('discord.js')
async function quote(message, options = {}) {

  if (!message) throw new Error('djs-fun Err: "message" is not defined')

  const axios = require('axios')
  const body = await axios.get('https://api.tovade.xyz/v1/fun/quote')
  const res = body.data
  const e = new MessageEmbed()
  e.setTitle(options.embedTitle || 'New Quote')
  e.setColor(options.embedColor || 'RANDOM')
  e.setDescription(`${res.content}`)
  e.setFooter(`Author: ${res.author}`)
  message.channel.send({embeds: [e]})
}

module.exports = quote;
