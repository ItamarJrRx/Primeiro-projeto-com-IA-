/*
let webhook = "https://itamarjunior.app.n8n.cloud/webhook-test/animacao-css"

async function CliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  })
  let resultado = await resposta.json()
  console.log(resultado)

  let button = document.querySelector(".botao-magica")

  button.disabled = true
}
*/

let webhook = "https://itamarjunior.app.n8n.cloud/webhook-test/animacao-css"

async function CliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value

  try {
    let resposta = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta: textoInput }),
    })

    let raw = await resposta.text()
    let resultado

    try {
      resultado = JSON.parse(raw)
    } catch {
      resultado = { mensagem: raw }
    }

    console.log("🔁 Resultado recebido:", resultado)

    document.querySelector(".botao-magica").disabled = true
  } catch (erro) {
    console.error("❌ Erro na requisição:", erro)
  }
}
