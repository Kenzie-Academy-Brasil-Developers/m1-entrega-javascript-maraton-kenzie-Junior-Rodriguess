function position(podio) {  
    let podios = [`Rafael`, `Manoel`, `Daniel`]
    let novoPodio = podios.splice(1, 0 , `Daniel`)
        if (podios != 0) {
        podios.pop(3)
        console.log(`Este é o novo pódio:`)
        return  podios.concat(novoPodio)
        }
        else {   
        return (`Daniel é o vencedor`)
        }
}
console.log(position())