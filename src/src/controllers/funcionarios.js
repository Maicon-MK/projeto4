const Funcionarios = require("../models/Funcionarios");

module.exports = (app) => {
    app.get("/", (req,res) => {
        res.send("<h1>API funcionando</h1>")
    })
    app.get("/funcionarios", (req,res) =>{
        Funcionarios.lista(req, res)
    })
    app.get("/funcionarios/:id", (req,res) => {
        let id = parseInt(req.params.id)
        Funcionarios.buscaID(id, res)
    })
    app.post("/funcionarios", (req, res) =>{
        Funcionarios.adiciona(req.body, res)
    })
    app.patch("/funcionarios/:id", (req, res) => {
        let id = parseInt(req.params.id)
        Funcionarios.atualiza(id, req.body, res)
    })
    app.delete("/funcionarios/:id", (req,res) => {
        let id = parseInt(req.params.id)
        Funcionarios.deleta(id, res)
    })
}