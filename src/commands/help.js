const execute = (bot, message, arg) =>{
    let player = `===== PLAYER =====`
    let string = `\n===== OUTROS =====`

      bot.commands.forEach(command => {
          if(!command.help) return
          if(command.playerCommand) player += `\n**!${command.name}**: ${command.help}`

        //   else if(command.name === 'leave') player += `\n**!${command.name}**: ${command.help}`
        //   else if(command.name === 'pause') player += `\n**!${command.name}**: ${command.help}`
        //   else if(command.name === 'resume') player += `\n**!${command.name}**: ${command.help}`
          
          else string += `\n**!${command.name}**: ${command.help}`
          
      })  
      return message.channel.send(`${player}\n ${string}`)
}

module.exports = {
    name: "help",
    execute
}