const { MessageEmbed, MessageAttachment } = require('discord.js')
const axios = require('axios')

class djsgames {
      async guessThePokemon(message, options={}){
          if(!message) throw new Error('"message" is not defined')
          const body = await axios.get('https://fun-api.sujalgoel.ml/pokemon')
          const res = body.data
          //console.log(res.data.name)

      //embeds
      const correct = new MessageEmbed()
      .setTitle('Correct!')
      .setDescription(`You guessed the correct pokemon, \`${res.data.name}\``)
      .setImage(res.data.ShowImage) 
      .setColor("GREEN")
      
      const stopped = new MessageEmbed()
      .setTitle('Game Stopped')
      .setDescription(`You have ended the game, the correct pokemon was \`${res.data.name}\``)
      .setImage(res.data.ShowImage)
      .setColor(`ff0000`)
      
      const start = new MessageEmbed()
      .setTitle('Guess The Pokemon!')
      .setDescription(`Type in chat what you think the pokemon is. \n \n **Abilities:** \n \`${res.data.abilities}\` \n\n **Type:** \n \`${res.data.types}`)
      .setImage(res.data.HiddenImage)
      .setColor('ff0000')
      
          message.channel.send({embeds: [start]})
          const filter = m => m.author.id
          const collector = message.channel.createMessageCollector(filter);
      
          collector.on('collect', async msg => {
            if(msg.author.bot) return
                const choice = msg.content.toLowerCase();
      if (choice === `${res.data.name}`) {
      message.channel.send({embeds: [correct]})
      collector.stop()
                } else if (choice === "stop") {
                  message.channel.send({embeds: [stopped]})
                  collector.stop();
                } else if (choice !== `${res.data.name}`) {
                  message.channel.send(`Wrong Guess Try Again! - Type \`stop\` to cancel the Game`)
                }
          })
      

      }

  }
  module.exports = djsgames;