const UserSevice = require("../../domain/user/services/UserService")
class AllUserController {
    handle(req, res, next) {
        const {body} = req
        UserSevice.createUser(body)
       res.send({
            nome_completo: req.body.nome_completo,
            email: req.body.email,
            confemail: req.body.confemail,
            cpf: req.body.cpf,
            celular: req.body.celular,
            nasc: req.body.nasc,
            emailesms: req.body.emailesms,
            whatsapp: req.body.whatsapp,
            pais_onde_reside: req.body.pais_onde_reside,
            cidade: req.body.cidade,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero
        });
    }
}
module.exports = new AllUserController();