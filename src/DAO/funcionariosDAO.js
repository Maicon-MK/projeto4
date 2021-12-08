const Dias = new Date()
const criado = Dias.getDate() + "/" + (Dias.getMonth() + 1) + "/" + Dias.getFullYear()

class FuncionariosDAO {

  static selectFuncionarios(FuncionariosDb) {
    return new Promise((resolve, reject) => {
      FuncionariosDb.all('SELECT * FROM Funcionarios', (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "Funcionarios": rows,
            "error": false
          })
        }
      })
    }
    )
  }

  static selectID(id, FuncionariosDb) {
    return new Promise((resolve, reject) => {
      FuncionariosDb.get(`SELECT * FROM Funcionarios WHERE ID = ?`, [id], (err, row) => {
        if (err) {
          reject({ "mensagem": err.message, "error": true })
        } else {
          resolve({
            "id": row,
            "error": false
          })
        }
      })
    })
  }

  static addFuncionarios(body, FuncionariosDb) {
    return new Promise((resolve, reject) => {
      FuncionariosDb.run( `INSERT INTO Funcionarios
      (MATRICULA, CARGO, SALARIO, NOME, ADMISSAO)
      VALUES
      (?,?,?,?,?)`, [body.MATRICULA, body.CARGO, body.SALARIO, body.NOME, criado], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedido": body,
            "error": false
          })
        }
      })
    })
  }

  static deleteFuncionarios(id, FuncionariosDb) {
    return new Promise((resolve, reject) => {
      FuncionariosDb.all(`DELETE FROM Funcionarios WHERE id = ?`, id, (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedido": id,
            "error": false
          })
        }
      })
    })
  }

  static updateFuncionarios(id, body, FuncionariosDb) {
    return new Promise((resolve, reject) => {
      FuncionariosDb.run(`UPDATE Funcionarios SET (MATRICULA, CARGO, SALARIO, NOME, ADMISSAO) = (?,?,?,?,?) WHERE id = ?`, [body.MATRICULA, body.CARGO, body.SALARIO, body.NOME, criado], (err) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "pedido": id,
            "error": false
          })
        }
      })
    })
  }
}

module.exports = FuncionariosDAO;

