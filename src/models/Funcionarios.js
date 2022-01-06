const funcionariosDAO = require("../DAO/funcionariosDAO");
const dataBase = require("../infra/conexao");


class Funcionarios{
    static async lista(req, res){
        try{
            res.status(200).json(await funcionariosDAO.selectfuncionarios(dataBase))
        } catch (e){
            res.status(404).json(e.menssage)
        }
    }
    static async buscaID(id, res){
        try {
            let idTaAqui = await funcionariosDAO.selectID(id, dataBase)
            res.status(200).json(idTaAqui)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
    static async adiciona(body, res) {
        try {
            let deuBom = await funcionariosDAO.addfuncionario(body, dataBase)
            res.status(201).json(deuBom)
        }catch(e){
            res.status(404).json(e.menssage)
            console.log(e.menssage)
        }
    }
    static async atualiza(id, body, res){
        try {
            let mudou = await funcionariosDAO.updatefuncionario(id, body, dataBase)
            res.status(201).json(mudou)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
    static async deleta(id, res){
        try {
            let deletei = await funcionariosDAO.deletefuncionario(id, dataBase)
            res.status(200).json(deletei)
        }catch(e){
            res.status(404).json(e.menssage)
        }
    }
}

module.exports = Funcionarios