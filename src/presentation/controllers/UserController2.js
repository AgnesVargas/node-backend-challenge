const UserSevice = require("../../domain/user/services/UserService")
class UserController2 {
    handle(req, res, next) {
        const {body} = req
        UserSevice.createUser(body)
        res.send({
            pais_onde_reside: req.body.pais_onde_reside,
            cidade: req.body.cidade,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero
        });
    }
}
module.exports = new UserController2();