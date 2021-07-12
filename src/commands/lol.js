const axios = require('axios')

const execute = async(bot, message, args) => {

    const headers = {
        "X-Riot-Token": process.env.LOL_KEY
    }
    if(args == ''){
       return message.reply('Você deve informar o Summoner Name ex: !lol Onerom')
    }
    try{
        const argu = args.join(" ")
        const arguEncoded = encodeURIComponent(argu)
        console.log(arguEncoded)
        const champions = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.16.1/data/pt_BR/champion.json')
        const name = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${arguEncoded}`, {headers})
        
        const arrayChamp = []
        
        for(i in champions.data.data){
            arrayChamp.push(champions.data.data[i])
        }
        
        // arrayChamp[0].id = 'Aatrox'
        const id = name.data.id
                
       elo(id, message, arrayChamp)

    }catch(err){
        console.log(err);
    }
    

}

const elo = async(id, message, array) => {

    const headers = {
        "X-Riot-Token": process.env.LOL_KEY
    }

    const elo = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`, {headers})

   // console.log(elo.data)

    const winRatio0 = () => {
        if(elo.data[0]){
            const wins0 = elo.data[0].wins
            const losses0 = elo.data[0].losses
            const total0 = wins0+losses0
            const wr0 = wins0*100/total0

            return `    ${wins0}/${losses0}    ${wr0.toFixed(0)}% WR`
        }
       
    }

    const winRatio1 = ()=>{
        if(elo.data[1]){
            const wins1 = elo.data[1].wins
            const losses1 = elo.data[1].losses
            const total1 = wins1+losses1
            const wr1 = wins1*100/total1
        
            return `    ${wins1}/${losses1}    ${wr1.toFixed(0)}% WR`
        }
    }
    
  
    let string = ''
    if(elo.data[0] == undefined){
        message.reply('Este Invocador não tem elo.')
    }
    if(elo.data[1] && elo.data[0]){
        const name0 = elo.data[0].summonerName
        const elo1 = elo.data[1].tier
        const rank1 = elo.data[1].rank
        const elo0 = elo.data[0].tier
        const rank0 = elo.data[0].rank
        const queue0 = elo.data[0].queueType.replace(/_/g, " ").replace("SR", "").replace("5x5", "")
        const queue1 = elo.data[1].queueType.replace(/_/g, " ").replace("SR", "").replace("5x5", "") 
        string = `\n**===== ${name0} =====**\n\n${queue0}: ${elo0} ${rank0}   ${winRatio0()}\n${queue1}: ${elo1} ${rank1}  ${winRatio1()}\n`
    }else{
        const name0 = elo.data[0].summonerName
        const elo0 = elo.data[0].tier
        const rank0 = elo.data[0].rank
        const queue0 = elo.data[0].queueType.replace(/_/g, " ").replace("SR", "").replace("5x5", "")
        string =`\n**===== ${name0} =====**\n\n${queue0}: ${elo0} ${rank0}  ${winRatio0()}\n`
    }

    

    const mastery = await axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, {headers})
    const arrayMastery = mastery.data

    let tresPrimeiros = arrayMastery.slice(0, 3)

    for(let i in array){
        let name = array[i].id
        let id = array[i].key
        for(let x in tresPrimeiros){
            if(tresPrimeiros[x].championId == id){
                tresPrimeiros[x].championId = name
            }
        }
         
    }

    const formatNumber = (num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }

    const string1 = tresPrimeiros.map(item =>{
        const date = new Date(item.lastPlayTime).toDateString()
        const str = `\nChampion: ${item.championId}\nMastery: ${formatNumber(item.championPoints)}\nLast Match: ${date}\n`
        return str
    })


   // console.log(tresPrimeiros)
    
    message.channel.send(string+string1[0]+string1[1]+string1[2])


}

module.exports = {
    name : 'lol',
    help : 'Exibe o elo e os 3 primeiros champions mais jogados.',
    execute
}