const execute = (bot, message, args)=>{
    const axios = require('axios')
    
    const url = 'https://api.thecatapi.com/v1/images/search?'
    const gif = "https://api.thecatapi.com/v1/images/search?mime_types=gif"
    
    const key = process.env.CAT_KEY

    const headers = {
        'x-api-key': key

    }

    if (args[0] === 'gif'){
        axios.get(gif, {headers:headers}).then( res => {
        const catgif = res.data[0].url
        message.channel.send(catgif)
            
        }).catch(err => console.log(err))
    }else{
        axios.get(url, {headers:headers}).then(res =>{
        const cat = res.data[0].url
         if(args[0] === 'puto'){
            const puto = 'https://cdn2.thecatapi.com/images/_NDSGIIcz.jpg'
            message.channel.send(puto)
        }else{
            message.channel.send(cat)
        }
        
    
            
        }).catch(err =>{console.log(err)})
    }
    
    
}

module.exports = {
    name: 'cat',
    help: 'Retorna uma foto de gatinho aleatória!',
    execute
}