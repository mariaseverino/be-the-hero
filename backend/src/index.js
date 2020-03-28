const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
/**
 * Metodos HTTP:
 * 
 * Get: buscar/listar uma informacao do back-end
 * Pos: criar uma informacao no back-end
 * Put: alterar uma informacao no back-end
 * Delete: deletar uma informacao no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query: Parametros enviados na rota apos "?" (filtros, paginacao)
 * Route: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requiseicao, utlizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: tablet('users').select('*').where()
  */

app.listen(3333);