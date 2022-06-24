const service = require('../../api/services/signInUpService');

test('Testa função userRegister recebendo como parâmetro um objeto válido', async () => {
  const userOkMock = {
    name: "Mano Brown",
    email: "brown@gmail.com",
    password: 1973
  };

   expect(service.userRegister(userOkMock)).toMatchObject({});
});

test('Testa função userRegister recebendo como parâmetro um objeto inválido', () => {
  const userNOkMock = {
    name: "",
    email: "brownemail.com",
    password: 12
  };

  expect(service.userRegister(userNOkMock)).toThrowError("Some error");
});