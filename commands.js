client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'start'){
    message.channel.send('What mode? Game or Life? (Type in chat!)')
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'code'){
    message.channel.send('Heres the code for me! https://replit.com/@JadenAndaya/Discord-Game-Bot#index.js')
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'creators'){
 let embed = new Discord.MessageEmbed()
.setTitle(`Creators`)
.setDescription(`**<@797180081353130045>: The Creator
<@452666956353503252>: Tester**
*<@619861196807340042>: Supporter
<@707771493441994843>: Supporter*`)
.setColor(`#98fffc`)

message.channel.send(embed).then(m => {
m.react('👍')
})
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'sotm'){
    message.channel.send('<@707771493441994843> is our supporter of the month!')
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'website'){
    message.channel.send('heres my website! https://gamebot.webflow.io')
  }
});

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'vote'){
    message.channel.send('Vote me! https://top.gg/bot/838492085992292353')
  }
});
