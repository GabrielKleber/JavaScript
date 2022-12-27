function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var res = window.document.querySelector('div#res')
    var img = window.document.querySelector('img#imagem')
    res.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //Boa Tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}