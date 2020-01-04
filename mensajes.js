const Discord = require("discord.js");
const  client = new Discord.Client();
function imprimeNumero(){
    let numero = 3;
    console.log(numero);
}

function dameMensaje(message,client){
	const embed = new Discord.RichEmbed() 
    .setTitle("El bot mas chido, puedo ser quien tu quieras que sea")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Super Poderoso")
    .setFooter("Y Atractivo", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://github.com/jairvelazquez")
    .addField("Muy sexy")
    .addField("Demasiado sexy", true)
    .addBlankField(true)
    .addField("Ya te diste cuenta cuan sexy soy?", true);
    return embed;
}  
exports.imprimeNumero=imprimeNumero;
exports.dameMensaje=dameMensaje;