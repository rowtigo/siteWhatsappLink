const btn = document.querySelector("#send")

btn.addEventListener('click', function(e) {

    e.preventDefault()

    const numero = document.querySelector('#txtNumero').value

    const link = "https://api.whatsapp.com/send?phone=" + numero

    navigator.clipboard.writeText(link);
    
    const resp = document.querySelector('#resp');
    resp.innerText = "📋 Link copiado!"
})

const input = document.querySelector('#txtNumero')

input.addEventListener('click', function() {

    input.value = "55"
})