<div align="center">

## yieldCheck

<img src="./img/bombagun2.svg" width="200px">
<img src="./img/bombagun2_2.png" width="200px">

Essa API é capaz de calcular o rendimento (quilômetros por litro) de Carros, Motos, ou afins a partir da interação simples do usuário informando quilometragem atual e litros abastecidos.

</div>

## Para calcular rendimento
  - Crie uma conta;
  - Faça login;
  - Realize o primeiro registro: 
    Ex: Ao abastecer, meu carro está com 100km rodados. Coloquei 10 litros de gasolina.
    portanto: { odometerKM: 100, litersProvided: 10 }

    A primeira interação não apenas faz o registro dos valores.

  - Realize novo registro:
    Ex: Fui novamente abastecer meu carro. Agora ele está com 200km rodados. Coloquei 8.2 litros de gasolina.
    portanto: { odometerKM: 200, literProvided: 8.2 }

---

## Informações para consumo da API

A API possui os seguintes endpoints que devem ser acessados conforme segue:

**http://localhost:3001/sign-up - requisição HTTP `POST`**:
  - Deve receber um JSON no formato

```json
  {
    "name": "String",
    "email": "formatode@email.com",
    "password": "String"
  }
```

**http://localhost:3001/sign - requisição HTTP `POST`**:
  - Deve receber um JSON no formato:

```json
  {
    "email": "formatode@email.com",
    "password": "String"
  }
```
  - Essa rota gera um Token JWT.

**http://localhost:3001`/supply/first-setup` - requisição HTTP `POST`**:
  - Deve receber um JSON no formato:

```json
  {
    "odometerKM": 20,
    "litersProvided": 10
  }
```
  - Essa rota demanda autenticação JWT para acesso.

**http://localhost:3001/supply/:id - requisição HTTP `PUT`**:
  - Campo :id deve conter o id gerado na resposta de requisição `POST` feita para rota `/supply/first-setup`
  - Deve receber um JSON no formato:

```json
  {
    "odometerKM": 120,
    "litersProvided": 10
  }
```
  - Essa rota demanda autenticação JWT para acesso.

**http://localhost:3001/current-status/:id - requisição HTTP `GET`**:
  - Campo :id deve conter o id gerado na resposta de requisição `POST` feita para rota `/supply/first-setup`
  - Essa rota demanda autenticação JWT para acesso.
