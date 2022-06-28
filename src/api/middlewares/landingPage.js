module.exports = (_req, res, _next) => {
  return res.status(200).send(`
    <body style="text-align: center; margin: 5rem; background-color: rgb(1,85,1);">

      <span style="font-size: xxx-large; color: white;">yield Check API</span>

      <br><br><br><br>

      <a href="https://github.com/gusttavocaruso/yieldCheck_backend">
        <img width="150px" src="https://raw.githubusercontent.com/gusttavocaruso/yieldCheck_backend/master/img/bombagun2.svg" />
        <img width="150px" src="https://raw.githubusercontent.com/gusttavocaruso/yieldCheck_backend/master/img/bombagun2_2.png" />
      </a>

      <br><br>

      <span style="font-size: large; font-weight: 500; background-color: green; border-radius: 10px; text-decoration: none; color: white;  width: 30%">
        Clique na imagem e acesse a Documentação.
      </span>

    </body>
  `);
}
