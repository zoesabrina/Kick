let resposta=0
let pontuacao=0
function astro(op){
    switch(op){
        case "as":
            resposta = prompt("O sol não é amarelo, nem vermelho. Sua cor original é...?\nA) Azul\nB) Verde-claro\nC) Roxo\nD) Azul-esverdeado").toLowerCase()
            if(resposta == "azul-esverdeado"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("A temperatura da Lua pode chegar a 100º C durante o dia lunar e -175º C à noite. Verdadeiro ou Falso").toLowerCase()
            if(resposta == "verdadeiro"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Mercúrio é mais quente que Vênus por estar mais próximo ao Sol. Verdadeiro ou Falso").toLowerCase()
            if(resposta == "falso"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Quantos planetas Terra cabem dentro do Sol?\nA) Um milhão\nB) Cem\nC) Dois milhões").toLowerCase()
            if(resposta == "um milhão"){
                pontuacao++
                alert(`Acertou! Nosso quiz sobre astronomia acabou e você tem: ${pontuacao} pontos`)
            }else{
                alert(`Resposta incorreta!\nQue pena, nosso quiz sobre astronomia terminou. Você tem: ${pontuacao} pontos`)
            }
            break
        default:
            alert("Opção inválida")
            break
    }
}
function geografia(gr){
    switch(gr){
        case "g":
            resposta = prompt("Qual país é conhecido como Terra do Sol Nascente?\nA) China\nB) Taiwan\nC) Coreia do Sul\nD) Japão").toLowerCase()
            if(resposta == "d"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Qual é o país mais populoso do mundo?\nA) China\nB) Índia\nC) Rússia\nD) Japão").toLowerCase()
            if(resposta == "b"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Como é chamada a pessoa que nasce na cidade de Salvador, na Bahia?\nA) Salvadorenho(a)\nB) Salvatoriano(a)\nC) Soteropolitano(a)\nD) Salvador(a)").toLowerCase()
            if(resposta == "c"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Qual é o continente que conta com o maior número de países?\nA) Ásia\nB) África\nC) Europa\nD) Oceania").toLowerCase()
            if(resposta == "b"){
                pontuacao++
                alert(`Acertou! Nosso quiz sobre astronomia acabou. Você tem: ${pontuacao} pontos`)
            }else{
                alert(`Resposta incorreta!\nQue pena, nosso quiz sobre astronomia terminou. Você tem: ${pontuacao} pontos`)
            }
            break
        default:
            alert("opção inválida")
            break
    }
}
function cultura(art){
    switch(art){
        case "at":
            resposta = prompt("Qual super-herói dos quadrinhos é conhecido como Homem-Morcego?\nA) Super-Homem\nB) Homem-Aranha\nC) Capitão América\nD) Batman").toLowerCase()
            if(resposta == "d"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Quem é o criador das histórias em quadrinhos da Turma da Mônica?\nA) Ziraldo\nB) Walt Disney\nC) Maurício de Sousa\nD) Monteiro Lobato").toLowerCase()
            if(resposta == "c"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt("Quem pintou o quadro chamado Mona Lisa, também conhecida como Gioconda?\nA) Pablo Picasso\nB) Claude Monet\nC) Salvador Dalí\nD) Leonardo da Vinci").toLowerCase()
            if(resposta == "d"){
                pontuacao++
                alert("Acertou, vamos para a próxima!")
            }else{
                alert("Resposta incorreta!")
            }
            resposta = prompt(" Qual artista canta a música Show das Poderosas?\nA) Gretchen\nB) Anitta\nC) Ludmilla\nD) Lexa").toLowerCase()
            if(resposta == "b"){
                pontuacao++
                alert(`Acertou! Nosso quiz sobre astronomia acabou. Você tem: ${pontuacao} pontos`)
            }else{
                alert(`Resposta incorreta!\nQue pena, nosso quiz sobre astronomia terminou. Você tem: ${pontuacao} pontos`)
            }
            break
        default:
            alert("opção inválida")
            break
    }
}