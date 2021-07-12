// const execute = (bot, message, args) =>{
//     const queue = bot.queues.get(message.guild.id)
//     if(!queue){
//         return message.reply('Não existe nenhuma música em reprodução.')
//     }
//     queue.dispatcher.resume()
// }

// module.exports = {
//     name: "resume",
//     help: "Continua a reprodução da música atual.",
//     execute
// }