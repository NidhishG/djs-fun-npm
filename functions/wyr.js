const { MessageEmbed } = require('discord.js')
async function wyr(message, options = {}) {

  if (!message) throw new Error('djs-fun Err: "message" is not defined')

  const axios = require('axios')

  const body = await axios.get('https://api.tovade.xyz/v1/fun/wyr')

  const res = body.data

  let em = new MessageEmbed()
    em.setTitle(options.embedTitle || 'Would You Rather')
    em.setDescription(`Would you rather \`${res.questions[0]}\` or \`${res.questions[1]}\` \n one = the first questions \n two = the second question`)
    em.setFooter('Type one or two in chat')
    em.setColor(options.embedColor || 'RANDOM');
  await message.channel.send({ embeds: [em] })

  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector(filter, { time: 15000, max: 1, errors: ['time'] });

  collector.on('collect', async m => {

    if (m.content === 'one') {

      message.channel.send(`The percentage for people choosing the would you rather question you choose was \`${res.percentage["1"]}%\``)
      await collector.stop()

    } else if (m.content === 'two') {

      message.channel.send(`The percentage for people choosing the would you rather question you choose was \`${res.percentage["2"]}%\``)
      await collector.stop()
    }
  })
}

module.exports = wyr;
