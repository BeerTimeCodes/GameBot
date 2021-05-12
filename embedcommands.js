
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
