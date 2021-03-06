const { Discord, MessageEmbed, Client } = require('discord.js');
const client = new Client();
const axios = require('axios');
require('dotenv').config()
const TOKEN = process.env.TOKEN;
var humanMode = false;

const hamImages = [
  'https://amindfullmom.com/wp-content/uploads/2020/03/Holiday-Ham-500x500.jpg',
  'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/19227-orange-glazed-baked-ham-760x580.jpg?ext=.jpg',
  'https://www.simplyrecipes.com/wp-content/uploads/2015/12/cranberry-glazed-ham-horiz-a-1600.jpg',
  'https://static01.nyt.com/images/2019/04/10/dining/09ham1/merlin_152928144_aea1c61c-cc19-45eb-9cfd-393b56ca4ac8-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8fk4IKv_bRQeaKQpyYw9WjQxN9JSb6QikQ&usqp=CAU'
];

const pusheenImages = [
  'https://pusheen.com/wp-content/uploads/2020/09/Preview-Image.jpg',
  'https://i.pinimg.com/originals/4b/94/94/4b949483527c5d6793318346ec327b2f.jpg',
  'https://pusheen.com/wp-content/uploads/2019/01/pusheen-kind.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/61tFQCSffML._AC_SY879_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/61cHmlICeIL._AC_SL1500_.jpg',
  'https://catingtonpost.com/wp-content/uploads/2017/08/457e2d35-4fd2-40dd-83da-cde9cadccdef.gif',
  'https://prodimage.images-bn.com/pimages/0889560375304_p0_v1_s550x406.jpg',
  'https://stickershop.line-scdn.net/stickershop/v1/product/1533271/LINEStorePC/main.png;compress=true',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsojaoHp7rCV-jXJjpg1bEekxG1ebfrQS-A&usqp=CAU'
];

client.on('ready', () => {
  console.log('HamBot activated...');
});

client.on('message', msg => {
  var messageString = msg.content;
  var messageID = msg.author.id;
  console.log(msg.author.username + ': ' + messageString);

  if(messageID != '779160012168888352') {

    var message = messageString.toLowerCase()

    if(!humanMode) {

      if(message.includes('ham')) {
        var hamImage = hamImages[Math.floor(Math.random() * 5)]
        var embed = new MessageEmbed().setImage(hamImage);
        console.log('ham: ->>>>>>>' + hamImage);
        msg.channel.send(embed);
      }

      if(message.includes('pusheen')) {
        var pusheenImage = pusheenImages[Math.floor(Math.random() * 9)]
        var embed = new MessageEmbed().setImage(pusheenImage);
        msg.channel.send(embed);
      }

      if(message.includes('advice')) {
        axios.get('https://api.adviceslip.com/advice').then(response => {
          console.log(response);
          msg.channel.send(response.data.slip.advice + ' \n \t - HamBot Wisdom #' + response.data.slip.id);
        });
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

      if(message.includes('meme')) {
        axios({
          'method': 'GET',
          'url': 'https://meme-api.herokuapp.com/gimme',
        }).then(response => {
          var embed = new MessageEmbed().setImage(response.data.url)
          msg.channel.send(embed);
        }).catch(err => {
          console.log(err);
        });
      }

      if(message.includes('pug')) {
        axios({
          'method': 'GET',
          'url': 'https://dog.ceo/api/breed/pug/images/random',
        }).then(response => {
          var embed = new MessageEmbed().setImage(response.data.message)
          msg.channel.send(embed);
        }).catch(err => {
          console.log(err);
        });
      }

      if(message.includes('golden')) {
        axios({
          'method': 'GET',
          'url': 'https://dog.ceo/api/breed/retriever/golden/images/random',
        }).then(response => {
          var embed = new MessageEmbed().setImage(response.data.message)
          msg.channel.send(embed);
        }).catch(err => {
          console.log(err);
        });
      }

      if(message.includes('-human on')) {
        msg.channel.send('DANGER!:\n\nHuman Mode Activated...');
        humanMode = true;
      }
    } else {

      if(message.includes('-human off')) {
        humanMode = false;
        msg.channel.send('Human Mode Deactivated...');
      } else {
        axios.post('http://localhost:5000/humanresponse').then(response => {

          msg.channel.send(response.data.msg)
        }).catch(err => {
          console.log(err);
        })
      }



    }

    if(message.includes('-help')) {
      msg.channel.send("```Commands:\n1. 'ham' -> HAM!\n2. 'joke' -> get a random joke\n3. 'pusheen' -> get a cute image\n4. 'meme' -> get a meme"
          + "\n5. 'pug' -> get a pug\n6. 'golden' -> get a golden retriever\n7. 'advice' -> get some HamBot wisdom"
          + "\n8. -human on/off -> AI Conversation Mode```");
    }

  }

});

client.login(TOKEN);

