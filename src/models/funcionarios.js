const FuncionariosDAO = require("../DAO/FuncionariosDAO");
const dataBase = require("../infra/conexao");


class Funcionarios{
    static async lista(req, res){
        try{
            res.status(200).json(await FuncionariosDAO.selectFuncionarios(dataBase))
        } catch (e){
            res.status(404).json(e.menssage)
        }
    }
    static async buscaID(id, res){
        try {
            let idTaAqui = await FuncionariosDAO.selectID(id, dataBase)
            res.status(200).json(idTaAqui)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
    static async adiciona(body, res) {
        try {
            let deuBom = await FuncionariosDAO.addFuncionarios(body, dataBase)
            res.status(201).json(deuBom)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
    static async atualiza(id, body, res){
        try {
            let mudou = await FuncionariosDAO.updateFuncionarios(id, body, dataBase)
            res.status(201).json(mudou)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
    static async deleta(id, res){
        try {
            let deletei = await FuncionariosDAO.deleteFuncionarios(id, dataBase)
            res.status(200).json(deletei)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
}

module.exports = Funcionarios