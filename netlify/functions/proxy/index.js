const fetch = require("node-fetch")

const body = {
  authorization: "Njg1MTozMDA4NDg1Mw=="
}

fetch("https://servicos.aeof.pt/inovarconsulta/api/loginFU/", {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))
