const { Router }  = require("express");
const {celebrate, Segments, Joi} = require ("celebrate");
const router = Router()

const UserController = require("./controllers/UserController");
const UserController2 = require("./controllers/UserController2");
const AllUserController = require("./controllers/AllUserController");

router.get("/user", UserController.handle);
router.get("/user/2", UserController2.handle);
router.post("/", celebrate ({
[Segments.BODY]: {
    
        nome_completo:Joi.string().min(3),
        email:Joi.string().email().required(),
        confemail:Joi.string().email().required().valid(Joi.ref("email")),
        cpf:Joi.number().min(11),
        celular:Joi.number().min(11),
        nasc:Joi.date(),
        emailesms:Joi.boolean() ,
        whatsapp:Joi.boolean(),
        pais_onde_reside: Joi.string().required(),
        cidade:Joi.string().required(),
        cep:Joi.number().min(8),
        endereco:Joi.string().required(),
        numero:Joi.number().required()
    
}


}), AllUserController.handle);

module.exports = router;
