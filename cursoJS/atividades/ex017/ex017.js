var agora = new Date()
var diaSemana = agora.getDay()
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

switch (diaSemana){ // switch serve para por mais de uma opção usando o case valor no caso ai são números e o break é obrigatorio, ele é melhor para valores pontuais, caso não seja um valor pontual melhor usar o if e else mesmo!

    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: // esse funciona como o else do if também n é obrigatorio e nem seu break é, to botando para lembrar depois
        console.log('[ERRO] Número invalido')
        break
}