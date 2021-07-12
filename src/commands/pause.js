const { servers } = require('./play')

const playerCommand = true

const execute = (bot, message, arg) =>{
    servers.server.dispatcher.pause()
}

module.exports = {
    name: "pause",
    help: "Pausa a música.",
    playerCommand,
    execute
}