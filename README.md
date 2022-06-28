<div align="center">

# yieldCheck

<img src="./src/img/bombagun2.svg" width="150px">
<img src="./src/img/bombagun2_2.png" width="150px">

Essa API é capaz de calcular o rendimento (quilômetros por litro) de Carros, Motos, ou afins a partir da interação simples do usuário informando quilometragem atual e litros abastecidos.

</div>

## Para calcular rendimento
  - Crie uma conta na rota POST `/account/sign-up`;
  - Faça login na rota POST `/account/sign-in`;
  - Realize o primeiro registro na rota POST `/supply/first-setup`;

    Ex: Fui abastecer meu carro e no odômetro está marcando 23km rodados.
    Coloquei R$ 50,00 de gasolina (8,33 litros)

    portanto: { odometerKM: 23 litersProvided: 8,33 }

    _A primeira interação não fornece retorno, apenas faz o registro dos valores._

  - Agora, utilize a rota PUT `/supply/:id` para os próximos registros futuros;

    Ex: Fui novamente abastecer meu carro. Agora o odômetro está marcando 98km rodados. Coloquei novamente R$ 50,00 de gasolina (8 litros)

    portanto: { odometerKM: 98, literProvided: 8 }

  - Essa interação retornará o rendimento em KM/L atual;

  - Através da rota GET `/supply/current-status` é possível consultar o histórico de registros de rendimento e a média desses registros;

---

## Informações para consumo da API

A API possui os seguintes endpoints que devem ser acessados conforme segue:

**http://localhost:3001/account/sign-up - requisição HTTP `POST`**:
  - Deve receber um JSON no formato

```json
  {
    "name": "String",
    "email": "formatode@email.com",
    "password": "String"
  }
```
---

**http://localhost:3001/account/sign-in - requisição HTTP `POST`**:
  - Deve receber um JSON no formato:

```json
  {
    "email": "formatode@email.com",
    "password": "String"
  }
```
  - Essa rota gera um Token JWT.
---

**http://localhost:3001/supply/first-setup - requisição HTTP `POST`**:
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

**http://localhost:3001/supply/:id - requisição HTTP `PUT`**:
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

**http://localhost:3001/supply/current-status - requisição HTTP `GET`**:
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

um projeto idealizado e desenvolvido por

<img src="https://i.postimg.cc/NfL4FSSP/IMG-8396.jpg" width="60px">

Gustavo Caruso ©

</div>
