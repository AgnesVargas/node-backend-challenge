class UserController {
    handle(req, res, next) {
        res.send({
            nome_completo: req.body.nome_completo,
            email: req.body.email,
            confemail: req.body.confemail,
            cpf: req.body.cpf,
            celular: req.body.celular,
            nasc: req.body.nasc,
        });
        req.send({
            
        })
    }
}
module.exports = new UserController();