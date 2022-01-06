const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);
const Dias = new Date()
const criado = Dias.getDate() + "/" + (Dias.getMonth() + 1) + "/" + Dias.getFullYear()

const TABELA_funcionarios = `
    CREATE TABLE IF NOT EXISTS "funcionarios" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "MATRICULA" varchar,
        "CARGO" varchar,
        "SALARIO" REAL,
        "NOME" varchar,
        "ADMISSAO" DATE
    )
`;

const ADD_DADOS_funcionarios = `INSERT INTO "funcionarios" 
        ("ID", "MATRICULA", CARGO, "SALARIO", "NOME", "ADMISSAO")
        VALUES
        (1, '000000', 'Publicitario', '00.00', 'Joaquim', ${criado})`

function criaTabelafuncionarios() {
    db.run(TABELA_funcionarios, (erro) => {
        if (erro) {
            console.log('Erro ao criar a tabela funcionarios', erro);
        }
    });
}

function insereTabelafuncionarios() {
    db.run(ADD_DADOS_funcionarios, (erro) => {
        if (erro) {
            console.log('Erro ao inserir os dados na tabela funcionarios');
        }
    });
}


db.serialize(() => {
    criaTabelafuncionarios();
    insereTabelafuncionarios();
})
