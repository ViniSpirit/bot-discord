// const execute = (bot, message, args)=> {
//     const queue = bot.queues.get(message.guild.id)
    
//     if(!queue){
//         return message.reply('Não existe nenhuma música em reprodução.')
//     }
//     const volume = Number(args.join(" "))
//     if(isNaN(volume) || volume < 0 || volume >10){
//         return message.reply("O volume deve ser um valor de 0 a 10.")
//     }
//     queue.dispatcher.setVolume(volume/10)
//     queue.volume = volume
//     bot.queues.set(message.guild.id, queue)
// }

// module.exports = {
//     name: "volume",
//     help: "Aumenta ou diminui o volume em uma escala de 0 a 10.",
//     execute
// }