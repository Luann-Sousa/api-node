import "reflect-metadata";
import express from 'express';
import "./database";

const app = express();


/*
METHODOS DE ROTAS 

GET => BUSCAR 
POST => SALVAR
PUT => ALTERAR
DELETE => DELETAR
PATCH => ALTERAÇÃO ESPECIFICA
*/
//ROTAS https:localhost:9090/users
//1 param => ROTA(Recurso API)
//2 param => request, response
app.get("/", (req, res) =>{
  res.json(
      {
          message: "Hellow Hord #NLW04"
      }

      );

});

app.post("",(req, res)=>{
    //RECEBEMOS OS DADOS PRA SALVA E VAMOS RETORNA PRO NOSSO CLIENTE QUE FEZ A REQ

    return res.json(
        {
           message: "Os Dados Foram Todos Recebido Com Sucesso !"
        });
});




app.listen(6666, function(){
console.log("Rodadando na porta 9090, https://localhost:9090")
});