// //const search = require('yt-search')
// const search = require('youtube-search')
// const ytdl = require('ytdl-core-discord')

// const execute = (bot, message, args) => {
//     s = args.join(" ")

//     var headers = {
//       maxResults: 10,
//       key: process.env.YT_KEY
//     };

//     try {
//         search(s, headers, (err, result) => {
//           console.log(result[0])
//           if (err) {
//             throw err;
//           } else if (result && result.length > 0) {
            
//             const song = result[0].link;
//             const queue = bot.queues.get(message.guild.id);

//             if (queue) {
//               queue.songs.push(song);
//               bot.queues.set(message.guild.id, queue);
//             } else playSong(bot, message, song);
//           } else {
//             // playSong(bot, message, s)
//             return message.reply("desculpe, não encontrei o que você desejava!");
//          }
//        });
//       } catch (e) {
//         console.error(e);
//       }
// };
    

// const playSong = async (bot, message, song) => {
//     let queue = bot.queues.get(message.member.guild.id);
//     if (!song) {
//       if (queue) {
//         queue.connection.disconnect();
//         return bot.queues.delete(message.member.guild.id);
//       }
//     }
//     if (!message.member.voice.channel) {
//       return message.reply(
//         "você precisa estar em um canal de voz para reproduzir uma música!"
//       );
//     }
//     if (!queue) {
//       const conn = await message.member.voice.channel.join();
//       queue = {
//         volume: 10,
//         connection: conn,
//         dispatcher: null,
//         songs: [song],
//       };
//     }
//     queue.dispatcher = await queue.connection.play(
//       await ytdl(song, { highWaterMark: 1 << 25, filter: "audioonly" }), //song.url quando o search voltar a funfar
//       {
//         type: "opus",
//       }
//     );
//     queue.dispatcher.on("finish", () => {
//       queue.songs.shift();
//       playSong(bot, message, queue.songs[0]);
//     });
//     bot.queues.set(message.member.guild.id, queue);
//   };
  
//   module.exports = {
//     name: "play",
//     help: "Reproduz a música desejada no canal atual do usuário.",
//     execute,
//     playSong,
// };