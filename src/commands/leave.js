const { servers } = require('./play')

const playerCommand = true

const execute = (bot, message, arg) =>{
    message.member.voice.channel.leave()
    servers.server.connection = null
    servers.server.dispatcher = null
    console.log(servers)
}

module.exports = {
    name: "leave",
    help: "Remove o bot da sala de voz.",
    playerCommand,
    execute
}