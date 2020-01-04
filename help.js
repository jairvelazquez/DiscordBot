 function showHelp(message,prefix){
      message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
      message.author.send('**COMANDOS DE MYBOT**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
                        '**MyBOT - Server guía y de soporte Únete :**\nhttps://discord.gg/VxwER6t');
     
 }
 

