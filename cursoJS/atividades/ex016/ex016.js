var agora = new Date()
var hora = agora.getHours() // Dica para identificar uma data / hora / tempo geral
console.log(`Agora são ${hora} hora(s)`)
if (hora < 12) {
    console.log('Bom dia!!')
}else if (hora < 18){
    console.log('Boa tarde!!')
}else {
    console.log('Boa noite!!')
}