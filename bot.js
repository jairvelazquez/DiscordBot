const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const mensajes = require("./mensajes.js");
const server = require("./server.js");
client.on("ready", () => {
   console.log("Estoy listo!");
     client.user.setPresence( {
       status: "online",
       game: {
           name: "Juzgar | Odiar a Roy",
           type: "PLAYING"
       }
   } );
});

var prefix = config.prefix;

client.on("message", (message) => {
  if (message.author.bot) return;//Para evitar condiciones ciclicas, si el mensaje viene de un bot este simplemente sera ignorado, aun asi tenga el prefix 
  if (message.content.startsWith(prefix)){
  	const args = message.content.slice(prefix.length).trim().split(" ");
  	const command = args.shift().toLowerCase();
  	switch(command){
  		case "help": message.channel.send("Que quieres imbecil? Mejor pregunta que hago antes de quererme usar");break;
  		case "el roy es un pretencioso" : message.channel.send("En Efecto Mi Estimado");break;
  		case "tool":message.channel.send("Who?");break;
  		case "dame la hora": 
  			var d = new Date();
  			message.channel.send("Quieres la hora? Pues ahi te va");
			message.channel.send(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());break;
		case "hazme un sandwich": message.channel.send("Cuando has visto un Gato de este tamaño?");break;
		case "quien eres?" : 
			const embed = mensajes.dameMensaje(message,client);
			message.channel.send({embed});
			break;
		case "8ball" :
			let texto = args.join(" ");
			var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    		if (!texto) return message.reply(`Escriba una pregunta.`);
    		message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  			break;
  		case "kick":
  			console.log("Entro");
  			let user = message.mentions.users.first();
    		let razon = args.slice(1).join(' ');
    		console.log(user);
    		console.log(razon);
    		if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    		if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
    		if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
    		message.guild.member(user).kick(razon);
 	   		message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
  			break;
  		case "ban" :
  			let userBan = message.mentions.users.first();
        	let razonBan = args.slice(1).join(' ');
        	if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        	if(!razonBan) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
        	if (!message.guild.member(userBan).bannable) return message.reply('No puedo banear al usuario mencionado.');
        	message.guild.member(userBan).ban(razonBan);
        	message.channel.send(`**${userBan.username}**, fue baneado del servidor, razón: ${razonBan}.`);
        	break;
        /*case "server":
			const embed2 = server.dameServidor(message,client);
			try{
				message.channel.send({embed2});
			}
			catch(error){
				message.channel.send("No tienes permisos para ejecutar este comando");
			}
   			break;*/
  	}
  }
});
client.login(config.token);
