# DJS-FUN Made by Nidhish#1295

### If any errors make sure to join the [Support Server](https://https://discord.gg/FF7brJcrEk)
*Note this package is meant for discord.js@dev, if 5 requests ill make one compatible with normal discord.js

This package is supposed to be a cool extension to [Discord.js](discord.js.org)

### Would You Rather

```js
const djs = require('djs-fun')
djs.wyr(message, {
        embedTitle: 'embed title here',
        embedColor: 'hex here'
})
```
![img1](https://i.imgur.com/jAWKHxk.png)

### Ghost Ping Detector

```js
client.on("messageDelete", async message =>{ //IMPORTANT: make sure its a messageDelete event!
const djs = require('djs-fun')
djs.ghostPing(message, {
        embedTitle: 'embed title here',
        embedColor: 'hex here'
})
})
```
![img30](https://cdn.discordapp.com/attachments/851508427531878451/861400480969916417/ghostping.gif)

# Random Stuff

### Random Joke

```js
    const { djsrandom } = require('djs-fun')
    const djs = new djsrandom()
    djs.joke(message, {
        embedTitle: 'embed title here',
        embedColor: 'hex here'
})
```
![RJPIC](https://imgur.com/6DzZPtq.png)

### Random Quote

```js
    const { djsrandom } = require('djs-fun')
    const djs = new djsrandom()
    djs.quote(message, {
        embedTitle: 'embed title here',
        embedColor: 'hex here'
})
```
![RQPIC](https://imgur.com/MuERdF5.png)

### Random Meme

```js
  const { djsrandom } = require('djs-fun')
  const djs = new djsrandom()
  djs.meme(message, {
      embedColor: 'ff0000'
})
```
![img229](https://cdn.discordapp.com/attachments/861399521035419688/861407843017162752/unknown.png)
# Search

### Play Store Search

```js
const djs = require('djs-fun')
djs.playstore(message, args)
```
![PSPIC](https://imgur.com/ecMMTDQ.png)

### iTunes Store Search

```js
const djs = require('djs-fun')
djs.iTunes(message, args)
```
![iTunesPIC](https://imgur.com/ZKpR0N1.png)

### NPM Store Search

```js
const djs = require('djs-fun')
djs.npm(message, args)
```
![NPMPIC](https://imgur.com/Z0kgfMu.png)