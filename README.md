# Projeto do modulo 4 ( API de uma agência de publicidade )

## Ferramentas utilizadas:
Para o desenvolvimento foi utilizado JavaScript com NodeJS como linguagem da aplicação, e foi ultilizado como  framework o Express. Como banco de dados relacional foi ultilizado o SQLite.

## Dependencias necessárias:
```js
"dependencies": {
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "moment": "^2.29.1",
    "sqlite3": "^5.0.2"
  }
```
As dependencias podem ser encontrada no arquivo <a href ='https://github.com/Maicon-MK/projeto4/blob/main/package.json'></a> do qual o trecho acima foi extraído. 


## Dependencias de desenvolvimento:
```json
"devDependencies": {
    "jest": "^27.3.1",
    "nodemon": "^2.0.15"
  }
```


```
npm install --save-dev jest && npm install --save-dev nodemon
```
## Inicialização da aplicação via terminal:

Para da inicio a aplicação, comece abrindo o terminal e coloque o comando abaixo para executa.


```
npm start
```

## Observação importante:
A versão NodeJs que foi ultilizada é a 16.x LTS. Para que rode sem problemas e necesario uma versao igual ou superio.



### Ver todos os pedidos:

Utilizar o método HTTP Get no caminho <b>"url da api" + /funcionarios</b>
<br>
<br>

### Buscar pedidos por id:

Utilizar o método HTTP Get no caminho <b>"url da api" + /funcionarios/id</b>
<br>
<br>

### Adicionar pedidos:

Utilizar o método HTTP Post no caminho <b>"url da api" + /funcionarios</b> com todos os dados necessários para o seu banco de dados. 

```json
{"MATRICULA": "000000",
"CARGO": "Publicitario",
"SALARIO": 1.000,
"NOME": "vitao"}
```
<br>
<br>

### Modificar um pedidos já existente:
Utilizar o método HTTP Patch no caminho <b>"url da api" + /funcionarios/:id</b> passando os valores que deseja alterar especificando seus devidos campos. 
```json
{"MATRICULA": "000000",
"CARGO": "Publicitario",
"SALARIO": 2.000,
"NOME": "vitao"}
```
<br>
<br>

### Deletar um pedidos:
Utilizar o método HTTP Delete no caminho <b>"url da api" + /fucionarios/:id</b>.



