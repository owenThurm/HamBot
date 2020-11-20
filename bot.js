const { Discord, MessageEmbed, Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('HamBot activated...');
});

client.on('message', msg => {
  console.log(typeof msg);
  console.log(msg);
  var messageString = msg.content;
  var messageID = msg.author.id;
  console.log(messageString);

  if(messageID != '779160012168888352' && messageString.toLowerCase().includes('ham')) {
    var embed = new MessageEmbed().setImage('https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/19227-orange-glazed-baked-ham-760x580.jpg?ext=.jpg');
    msg.channel.send(embed);
  }
});

client.login('Nzc5MTYwMDEyMTY4ODg4MzUy.X7cfTg.VFeMSpRlRc43KdG5PA-cEOOB8Eo');

