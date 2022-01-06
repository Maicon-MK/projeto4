const Dias = new Date()
const criado = Dias.getDate() + "/" + (Dias.getMonth() + 1) + "/" + Dias.getFullYear()

class funcionarioDAO {

  static selectfuncionarios(funcionarioDb) {
    return new Promise((resolve, reject) => {
      funcionarioDb.all('SELECT * FROM funcionarios', (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "funcionarios": rows,
            "error": false
          })
        }
      })
    }
    )
  }

  static selectID(id, funcionarioDb) {
    return new Promise((resolve, reject) => {
      funcionarioDb.get(`SELECT * FROM funcionarios WHERE ID = ?`, [id], (err, row) => {
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

  static addfuncionario(body, funcionarioDb) {
    return new Promise((resolve, reject) => {
      funcionarioDb.run( `INSERT INTO funcionarios 
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

  static deletefuncionario(id, funcionarioDb) {
    return new Promise((resolve, reject) => {
      funcionarioDb.all(`DELETE FROM funcionarios WHERE id = ?`, id, (err) => {
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

  static updatefuncionario(id, body, funcionarioDb) {
    return new Promise((resolve, reject) => {
      funcionarioDb.run(`UPDATE funcionarios SET (MATRICULA, CARGO, SALARIO, NOME, ADMISSAO) = (?,?,?,?,?) WHERE id = ?`, [body.MATRICULA, body.CARGO, body.SALARIO, body.NOME, criado], (err) => {
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

module.exports = funcionarioDAO

