/* função para puxar o DDD */
function getDDD(ddd, callback) {
    let url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if ('state' in data) {
                let retorno = data
                callback(null, retorno)
            } else {
                callback("Cep não encontrado", null)
            }
        })
        .catch(error => {
            callback(error, null)
        })
}
/* Função para colocar a resposta no Forms*/
function atualizaForm() {
    const ddd = document.getElementById('ddd')
    const state = document.getElementById('state')
    const cities = document.getElementById('cities')
    const dddValor = ddd.value
    if (dddValor.length === 2) {
        getDDD(dddValor, (erro, dados) => {
            if (erro) {
                alert(erro)
            } else {
            state.value = `${dados.state}`
            cities.value = `${dados.cities}`
            console.log(state.value)
            }
        })
    }
}
