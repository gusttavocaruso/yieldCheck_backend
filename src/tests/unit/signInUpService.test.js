const service = require('../../api/services/signInUpService');

test('Testa função userRegister recebendo como parâmetro um objeto válido', async () => {
  const userOkMock = {
    name: "Mano Brown",
    email: "brown@gmail.com",
    password: "1973"
  };

   expect(await service.userRegister(userOkMock)).toMatchObject({});
});

test('Testa função userRegister recebendo como parâmetro um objeto inválido', async () => {
  const userNOkMock = {
    name: "",
    email: "brownemail.com",
    password: 12
  };

  expect(await service.userRegister(userNOkMock))
    .toThrowError('"name" is not allowed to be empty');
});