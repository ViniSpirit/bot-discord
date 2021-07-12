const ytdl = require('ytdl-core')
const google = require('googleapis')
const dotenv = require('dotenv')

dotenv.config()

const playerCommand = true

const servers = {
    'server': {
        connection: null,
        dispatcher: null,
    }
}

const youtube = new google.youtube_v3.Youtube({
    version: 'v3',
    auth: process.env.YT_KEY
})



const execute = async (bot, message, arg) =>{ 

    if(arg.length === 0){
        message.reply('Você precisa dizer o que tocar!')
        return
    }
    
    if(!message.member.voice.channel) {
        message.reply('Você precisa estar em um canal de voz!')
        return
    }

    try {
        servers.server.connection = await message.member.voice.channel.join()

    } catch (error) {
        console.log('Erro ao entrar no canal de voz')
        console.log(error)

    }


    if(ytdl.validateURL(arg[0])){
        servers.server.dispatcher = servers.server.connection.play(ytdl(arg[0],{filter: 'audioonly'}))

    }else {
        youtube.search.list({
            q:arg.join(' '),
            part: 'snippet',
            fields: 'items(id(videoId), snippet(title))',
            type: 'video'
        }, (err, result)=>{
            if(err) console.log(err)
            if(result) {
                const link = `https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`
                servers.server.dispatcher = servers.server.connection.play(ytdl(link,{filter: 'audioonly'}))
            }
        })

    }

}

module.exports = {
    name: "play",
    help: "Reproduz áudio de vídeos do youtube.",
    playerCommand,
    servers,
    execute
}