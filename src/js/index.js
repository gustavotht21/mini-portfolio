const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", () => {

        if(aba.classList.contains("selecionada")) {
            return;
        }

        selecionarAba(aba)

        mostrarInformacoes(aba)

    })
})

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionada")
    abaSelecionada.classList.remove("selecionada")
    aba.classList.add("selecionada")
    return;
}

function mostrarInformacoes(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionada")
    informacaoSelecionada.classList.remove("selecionada")

    const idElementoInformacoesAba = `informacao-${aba.id}`
    const informacaoExibir = document.getElementById(idElementoInformacoesAba)
    informacaoExibir.classList.add("selecionada")
}