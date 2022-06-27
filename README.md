<div align="center">

## yieldCheck

<img src="./img/bombagun2.svg" width="200px">
<img src="./img/bombagun2_2.png" width="200px">

Essa API é capaz de calcular o rendimento (quilômetros por litro) de Carros, Motos, ou afins a partir da interação simples do usuário informando quilometragem atual e litros abastecidos.

</div>

## Para calcular rendimento
  - Crie uma conta;
  - Faça login;
  - Realize o primeiro registro na rota `/supply/first-setup`;

    Ex: Fui abastecer meu carro e no odômetro está marcando 23km rodados.
    Coloquei R$ 50,00 de gasolina (8,33 litros)

    portanto: { odometerKM: 23 litersProvided: 8,33 }

    _A primeira interação não fornece retorno, apenas faz o registro dos valores._

  - Realize novo registro na rota `/supply`:

    Ex: Fui novamente abastecer meu carro. Agora o odômetro está marcando 98km rodados. Coloquei novamente R$ 50,00 de gasolina (8 litros)

    portanto: { odometerKM: 98, literProvided: 8 }

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
