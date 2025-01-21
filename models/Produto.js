import { STRING } from "sequelize";
import banco from "../config/banco.js"
import { status, type } from "express/lib/response.js";

const Produto = banco.Sequelize.define('produtos', {
    id:{
        type: banco.Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    descricao:{
        type: banco.sequelize.STRING(150)
    },
    preco:{
        type: banco.Sequelize.FLOAT
    },
    estoque:{
        type: banco.Sequelize.INTEGER
    },
    status: {
        type: banco.Sequelize.INTEGER
    },
    foto: {
        type: banco.Sequelize.STRING(150)
    }
})

Produto.sync()
export default Produto