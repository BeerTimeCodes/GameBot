client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'start'){
    message.channel.send('What mode? Game or Life? (Type in chat!)')
  }
});
