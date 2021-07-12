const Discord = require('discord.js')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const bot = new Discord.Client()

bot.commands = new Discord.Collection()

bot.queues = new Map()


const commandFiles = fs.readdirSync(path.join(__dirname,"/commands"))
.filter(filename => filename.endsWith('.js'))

for (filename of commandFiles){
    const command = require(`./commands/${filename}`)
    bot.commands.set(command.name, command)
}


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}!`)
    
  })


bot.on('message', (message)=>{
    
    if(!message.content.startsWith(process.env.PREFIX) || message.author.bot) return
    
    const args = message.content.slice(process.env.PREFIX.length).split(/\s+/g)
    const command = args.shift()
    console.log(args)
    try{
        bot.commands.get(command).execute(bot, message, args)
        
    } catch(e) {
        console.error(e)
        console.log(args)
        return message.reply('Ops, eu ainda não conheço esse comando =(')
        
    }
   
    
})



bot.login(process.env.TOKEN)