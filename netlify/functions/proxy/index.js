const fetch = require("node-fetch")

//We export the function
exports.handler = async function (event, context) {
  //Fetch request details from event object
  const { path, httpMethod, headers, queryStringParameters, body } = event;
  // return some JSON data with a status of 200

  body={
    authorization: "Njg1MTozMDA4NDg1Mw=="
  }
  
  const response = await fetch("https://servicos.aeof.pt/inovarconsulta/api/loginFU/"), {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" }
})

  //https://servicos.aeof.pt/inovarconsulta/api/loginFU/
  // data={'authorization':encoded_login}

  const data = await response.json()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(await data),
  };
};
