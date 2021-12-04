const funcionarios = require("../models/funcionarios");

module.exports = (app) => {
    app.get("/", (req,res) => {
        res.send("<h1>API funcionando</h1>")
    })
    app.get("/funcionarios", (req,res) =>{
        funcionarios.lista(req, res)
    })
    app.get("/funcionarios/:id", (req,res) => {
        let id = parseInt(req.params.id)
        funcionarios.buscaID(id, res)
    })
    app.post("/funcionarios", (req, res) =>{
        funcionarios.adiciona(req.body, res)
    })
    app.patch("/funcionarios/:id", (req, res) => {
        let id = parseInt(req.params.id)
        funcionarios.atualiza(id, req.body, res)
    })
    app.delete("/funcionarios/:id", (req,res) => {
        let id = parseInt(req.params.id)
        funcionarios.deleta(id, res)
    })
}