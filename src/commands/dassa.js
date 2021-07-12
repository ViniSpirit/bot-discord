const execute = (bot, message, args) =>{

    const dassaArray = [
        'https://i.imgur.com/enafaiN.jpg',
        'https://i.imgur.com/X80cvCC.jpg',
        'https://i.imgur.com/WZxeHv6.jpg',
        'https://i.imgur.com/EX39VTM.jpg',
        'https://i.imgur.com/QeFpmrt.jpg',
        'https://i.imgur.com/8fHS42E.jpg',
        'https://i.imgur.com/k0vh0Xj.jpg',
        'https://i.imgur.com/3QPeBm2.jpg',
        'https://i.imgur.com/F5iNZm3.jpg',
        'https://i.imgur.com/wORTxXj.jpg',
        'https://i.imgur.com/JUTdFNN.jpg',
        'https://i.imgur.com/ogwPxEK.jpg',
        'https://i.imgur.com/s1O9UyW.jpg',
        'https://i.imgur.com/YhpZbAM.jpg'
    ] 

    const dassa = dassaArray[Math.floor(Math.random() * dassaArray.length)]
    message.channel.send(dassa)

}

module.exports = {
    name: 'dassa',
    help: 'Retorna uma foto aleatória do dassa!',
    execute
}