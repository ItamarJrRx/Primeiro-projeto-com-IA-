let webhook = "https://itamarjunior.app.n8n.cloud/webhook/animacao-css"

async function CliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value
  document.querySelector(".input-animacao").value = "" // Limpa o campo

  let codigo = document.querySelector(".area-codigo")
  let areaResultado = document.querySelector(".area-resultado")

  let botao = document.querySelector(".botao-magica")
  botao.disabled = true
  botao.textContent = "Criando..."
  botao.style.background = "#888"

  try {
    let resposta = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta: textoInput }),
    })

    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    codigo.innerHTML = info.code

    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>${info.style}</style>`
    )
    areaResultado.innerHTML = info.preview

    console.log("🔁 Resultado recebido:", resultado)

    document.querySelector(".botao-magica").disabled = true
  } catch (erro) {
    console.error("❌ Erro na requisição:", erro)
  }

  botao.disabled = false
  botao.textContent = "Criar Mágica 🎩"
  botao.style.background = "#37e359"
}
