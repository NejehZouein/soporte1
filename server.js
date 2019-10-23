//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json")
// config.token contains the bot's token
// config.prefix contains the message prefix.

var prefix = "+"

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setPresence( {
       status: "online",
       game: {
           name: "Seguridad || Usa -help",
           type: "STREAMING"
       }
   } );

});


//llamado de comandos

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  //kick
  //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "*", "💸 ❱ Founder", "⌨️ ❱ Developer", "【DEVELOPER】", "【OWNER】", "『Admin』", "『Owner』"].includes(r.name)) )
      return message.channel.send("⚠ **Lo sentimos, usted no tiene acceso para usar este comando**");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send("ℹ **Usted debe mencionar a un usuario para realizar la acción**");
    if(!member.kickable) 
      return message.channel.send("❌ **No puedo sancionar al usuario... Revisa si mi rol es mas alto y tengo los permisos correctos.**");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No se ha proporcionado un motivo";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`__${member.user.tag}__ ha sido **expulsado** por __${message.author.tag}__ con el **motivo** de: __${reason}__`);

  }
  //ban
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator", "*", "⌨️ ❱ Developer", "💸 ❱ Founder ", "【DEVELOPER】", "【OWNER】", "『Admin』", "『Owner』"].includes(r.name)) )
      return message.channel.send("⚠ **Lo sentimos, usted no tiene acceso para usar este comando**");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("ℹ **Usted debe mencionar a un usuario para realizar la acción**");
    if(!member.bannable) 
      return message.channel.send("❌ **No puedo sancionar al usuario... Revisa si mi rol es mas alto y tengo los permisos correctos.**");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No se ha proporcionado un motivo";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.channel.send(`__${member.user.tag}__ ha sido **vetado** por __${message.author.tag}__ con el **motivo** de: __${reason}__`);
  }
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
   //advertencia, modificar esto podria traer grabes problemas
  
  //clearmessages
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    //rol requires

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send("ℹ **Por favor**, indique la cantidad de mensajes a borrar entre el 2 al 100");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`**hubo un error al borrar los mensajes:** ${error}`));
  }
  
  if (message.content.startsWith("-userinfo")) {
    message.channel.send(`ℹ **Tu nombre es:** ${message.author.username}\n🆔 **Tu ID es:** ${message.author.id}`);
  }
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`🏓 **Pong!** Latencia: ${m.createdTimestamp - message.createdTimestamp}ms. Latencia del API: ${Math.round(client.ping)}ms`);
  }
  
});
//commands

client.on('message', message => {
  
  
  
  //block bad words
 let blacklisted = [ 'gay', 'GAY', 'pto', 'PUTO', 'PTO', 'HELE',  "Pito"]
  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.channel.send("⚠ **Esta prohibido enviar esos mensajes**")
  }
});


client.login(process.env.TOKEN);