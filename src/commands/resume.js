const { servers } = require('./play')

const playerCommand = true

const execute = (bot, message, arg) =>{
    servers.server.dispatcher.resume()
}

module.exports = {
    name: "resume",
    help: "Continua a música que foi pausada.",
    playerCommand,
    execute
}