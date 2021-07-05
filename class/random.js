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
const cats = ['dankmemes', 'memes', 'MemeEconomy', 'AdviceAnimals']
const random = cats[Math.floor(Math.random() * cats.length)]


        const axios = require('axios')
        const body = await axios.get(`https://api.tovade.xyz/v1/info/reddit?sub=${random}`)
        const res = body.data
        const e = new MessageEmbed()
        e.setTitle(`${res.title}`)
        e.setURL(`${res.permalink}`) 
        e.setColor(options.embedColor || 'RANDOM')
        e.setImage(`${res.url}`)
        e.setFooter(`👍 Upvotes: ${res.votes["upvotes"]} | 👎 Downvotes: ${res.votes["downvotes"]}`)
        message.channel.send({embeds: [e]})      

      }
      

  }
  module.exports = djsrandom;