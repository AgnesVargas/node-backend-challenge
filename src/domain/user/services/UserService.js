const User = require("../mocks/UserMock")

class UserService {
    createUser(body) {
        const { nome_completo, email, confemail, cpf, celular, nasc, emailesms, whatsapp, pais_onde_reside, cidade, cep, endereco, numero } = body;
        console.log(body)















    }
}

module.exports = new UserService();