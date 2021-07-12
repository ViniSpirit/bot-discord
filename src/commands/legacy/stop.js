// const execute = (bot, message, args) => {
//     const queue = bot.queues.get(message.guild.id)
//     if (!queue) {
//       return message.reply("não existe nenhuma música sendo reproduzida.")
//     }
//     queue.songs = []
//     bot.queues.set(message.guild.id, queue)
//     queue.dispatcher.end()
//   }
  
//   module.exports = {
//     name: "stop",
//     help: "Encerra a reprodução de músicas no servidor.",
//     execute,
//   }