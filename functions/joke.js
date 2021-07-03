const { MessageEmbed } = require('discord.js')
async function joke(message, options = {}) {

  if (!message) throw new Error('djs-fun Err: "message" is not defined')

  const axios = require('axios')
  const body = await axios.get('https://api.tovade.xyz/v1/fun/joke')
  const res = body.data
  
  const em = new MessageEmbed()
  em.setColor(options.embedColor || 'RANDOM')
  em.setTitle(options.embedTitle || 'New Joke!')
  em.setDescription(`**${res.question}** \n \n||${res.answer}||`)
  em.setFooter(`Category: ${res.category}`)

  await message.channel.send({embeds: [em]})
}

module.exports = joke;
