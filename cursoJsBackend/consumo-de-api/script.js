async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente')
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var complemento = document.getElementById('complemento')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        complemento.value = consultaCEPConvertida.complemento
        bairro.value = consultaCEPConvertida.bairro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(error)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => {
    buscaEndereco(cep.value)
})


// let ceps = ['01001000','01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))