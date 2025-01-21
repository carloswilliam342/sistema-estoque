import Sequelize from "sequelize"

const NOME_BANCO = 'loja'
const USUARIO = 'root'
const SENHA = ''
const HOST = 'localhost'

const sequelize = new Sequelize(
    NOME_BANCO,
    USUARIO,
    SENHA,
    {
        host: HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(function(){
    console.log('Conexão relaizada com sucesso !')
}).catch(function(erro){
    console.log('Erro:' + err0)
})

export default {Sequelize, sequelize}