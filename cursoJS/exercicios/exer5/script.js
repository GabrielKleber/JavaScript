let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#txtlista')
let res = document.querySelector('div#res')
let valores = []

/*
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function emLista(n, l){
    if(l.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }
}
*/

function adicionar(){
    if(Number(num.value) <= 100 && Number(num.value) >= 1){
        if(valores.indexOf(num)){
            window.alert('Número já existente!')
        }else{
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado`
            lista.appendChild(item)
        }
    }else{
        window.alert('Números entre 1 e 100 por favor!')
    }
}