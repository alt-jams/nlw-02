import express from 'express';
import routes from './routes';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

//rotas: endereço da aplicação http://localhost:3333/users
//resource: o que vem da url base - /users
//metodos:
//get: buscar ou listar uma informação
//post: criar alguma nova informação dentro do backend
//put: atualizar uma informação
//delete: deletar uma informação 

//sempre que um navegador vai acessar um endereço, ele faz uma requisição do tipo get
//baixar insomnia core

//parametros
// Corpo: request body - dados para a criação ou atualização de um registro

//Route params: identificar um recurso dentro da rota, qual deletar ou alterar

//Query Params: o resto: listagem, paginação, filtro, ordenação etc
app.use(routes);

app.listen(3333); 
