const { MessageEmbed } = require('discord.js')

class djsrandom {
  async joke(message, options = {}){ 
  
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
      
      async quote(message, options ={}){
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
      async meme(message, options ={}){
        if (!message) throw new Error('djs-fun Err: "message" is not defined')


        const axios = require('axios')
        const body = await axios.get(`https://fun-api.sujalgoel.ml/meme`)
        const res = body.data
        const e = new MessageEmbed()
        e.setTitle(`${res.data.title}`)
        e.setURL(`${res.data.postLink}`) 
        e.setColor(options.embedColor || 'RANDOM')
        e.setImage(`${res.data.image}`)
        e.setFooter(`👍 ${res.data.upvotes} | 👎 ${res.data.downvotes}`)
        message.channel.send({embeds: [e]})      

      }
      async why(message, options ={}){
        if (!message) throw new Error('djs-fun Err: "message" is not defined')

        const axios = require('axios')
        const body = await axios.get(`https://nekos.life/api/v2/why`)
        const res = body.data
        const e = new MessageEmbed()
        e.setTitle(options.embedTitle || 'Random Why')
        e.setColor(options.embedColor || 'RANDOM')
        e.setDescription(`${res.why}`)
        message.channel.send({embeds: [e]})      
      }

  }
  module.exports = djsrandom;