const { Discord, MessageEmbed, Client } = require('discord.js');
const client = new Client();
const dotenv = require('dotenv');
const axios = require('axios');

const TOKEN = process.env.TOKEN;
console.log(TOKEN);

const hamImages = [
  'https://amindfullmom.com/wp-content/uploads/2020/03/Holiday-Ham-500x500.jpg',
  'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/19227-orange-glazed-baked-ham-760x580.jpg?ext=.jpg',
  'https://www.simplyrecipes.com/wp-content/uploads/2015/12/cranberry-glazed-ham-horiz-a-1600.jpg',
  'https://static01.nyt.com/images/2019/04/10/dining/09ham1/merlin_152928144_aea1c61c-cc19-45eb-9cfd-393b56ca4ac8-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8fk4IKv_bRQeaKQpyYw9WjQxN9JSb6QikQ&usqp=CAU'
];

client.on('ready', () => {
  console.log('HamBot activated...');
});

client.on('message', msg => {
  console.log(typeof msg);
  console.log(TOKEN);
  console.log(msg);
  var messageString = msg.content;
  var messageID = msg.author.id;
  console.log(messageString);

  if(messageID != '779160012168888352') {
    var message = messageString.toLowerCase()

    if(message.includes('ham')) {
      var hamImage = hamImages[Math.floor(Math.random() * 5)]
      var embed = new MessageEmbed().setImage(hamImage);
      console.log('ham: ->>>>>>>' + hamImage);
      msg.channel.send(embed);
    }

    if(message.includes('joke')) {
      axios({
        'method': 'GET',
        'url': 'https://joke3.p.rapidapi.com/v1/joke',
        'headers': {
          'x-rapidapi-key': '9be102c92dmsh190ac2792aa9da3p111139jsn765a575a921c'
        }
      }).then(response => {
        msg.channel.send(response.data.content);
      }).catch(err => {
        console.log(err);
      });
    }

    if(message.includes('-help')) {
      msg.channel.send("```Commands:\n1. 'ham' -> HAM!\n2. 'joke' -> get a random joke```");
    }

  }

});

client.login('');

