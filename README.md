<div align="center">

# yieldCheck

<img src="./src/img/bombagun2.svg" width="150px">
<img src="./src/img/bombagun2_2.png" width="150px">

API capaz de calcular o rendimento (quilômetros por litro) de Carros, Motos, ou afins a partir da interação simples do usuário informando quilometragem atual e litros abastecidos.

</div>

---

## API infos:

Hospedada na plataforma <a href="https://www.heroku.com/" target="_blank">HEROKU</a>. Pode ser acessada através <a href="https://yield-check-back.herokuapp.com/" target="_blank">DESTE LINK</a>

O Banco de dados utilizado é o banco noSQL <a target="_blank" href="https://www.mongodb.com/">MongoDB</a> e está hospedado no <a target="_blank" href="https://cloud.mongodb.com/">MongoCloud Atlas</a>

**Para acessar as rotas utilize um client como <a target="_blank" href="https://insomnia.rest/">Insomnia</a>, <a target="_blank" href="https://www.postman.com/">Postman</a> ou similar.**

Se atente para os endpoints que necessitam autenticação via Token JWT.

---

## Para calcular rendimento
  - Crie uma conta na rota POST `/account/sign-up`;
  - Faça login na rota POST `/account/sign-in`;
  - Realize o primeiro registro na rota POST `/supply/first-setup`;

    Ex: Fui abastecer meu carro e no odômetro está marcando 23km rodados.
    Coloquei R$ 50,00 de gasolina (8,33 litros)

    portanto, o body deve receber: `{ odometerKM: 23 litersProvided: 8,33 }`

    _A primeira interação não fornece retorno, apenas faz o registro dos valores._

  - Agora, utilize a rota PUT `/supply/:id` para os próximos registros futuros;

    Ex: Fui novamente abastecer meu carro. Agora o odômetro está marcando 98km rodados. Coloquei novamente R$ 50,00 de gasolina

    portanto: `{ odometerKM: 98, literProvided: 8,33 }`

  - Essa interação retornará o rendimento em KM/L atual;

  - Através da rota GET `/supply/current-status` é possível consultar o histórico de registros de rendimento e a média desses registros;

---

## Informações para consumo da API

Para testar as rotas você pode utilizar a API hospedada no Heroku ou clonar o projeto para sua maquina, instalar as dependencias via `npm install` e rodar a API com o comando `npm run dev`, assim ela ficará disponível na porta `:3001`

As rotas disponíveis são:

**/account/sign-up - requisição HTTP `POST`**:
  - Deve receber um JSON no formato

```json
  {
    "name": "String",
    "email": "formatode@email.com",
    "password": "String"
  }
```
---

**/account/sign-in - requisição HTTP `POST`**:
  - Deve receber um JSON no formato:

```json
  {
    "email": "formatode@email.com",
    "password": "String"
  }
```
  - Essa rota gera um Token JWT.
---

**/supply/first-setup - requisição HTTP `POST`**:
  - Deve receber um JSON no formato:

```json
  {
    "odometerKM": 20,
    "litersProvided": 10
  }
```
  - Essa rota demanda autenticação JWT para acesso.
  - Essa rota retorna um `_id` referente a interação - será utilizado na rota PUT `/supply/:id`;
---

**/supply/:id - requisição HTTP `PUT`**:
  - Deve receber um JSON no formato:

```json
  {
    "odometerKM": 120,
    "litersProvided": 10
  }
```
  - Essa rota demanda autenticação JWT para acesso.
  - Campo :id deve conter o id referente a interação gerado na resposta de requisição POST `/supply/first-setup`
---

**/supply/current-status - requisição HTTP `GET`**:
  - Essa rota retorna o rendimento atual (média e histórico) para usuário autenticado (logado).
  - Retornará um json no formato:

```json
  {
    "Usuário": "formatode@email.com",
    "currentYield": {
      "average": "9.4 KM/L",
      "kmPerLStory": [
        {
          "kmPerL": 8,
          "at": "01/01/2023"
        },
        {
          "kmPerL": 10.8,
          "at": "07/01/2023"
        }
      ]
    }
  }
```
  - Essa rota demanda autenticação JWT para acesso.

---

<div align="center">

Pretende-se criar um front-end que consumirá essa API.

Issues, sugestões, feedbacks, CR e PR são bem vindos.

#

_Idealizado e desenvolvido por_

<img src="https://i.postimg.cc/NfL4FSSP/IMG-8396.jpg" width="50px">

_Gustavo Caruso_ ©

gustavoalmeida26@hotmail.com

</div>
