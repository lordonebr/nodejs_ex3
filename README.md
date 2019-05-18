# nodejs_ex3
POS graduação

Curso: Desenvolvimento Web Full Stack

Disciplina: Programação web com Node.js

Professor: Samuel Martins

## Exercício 3

- COMANDO para SUBIR o serviço:
  ```
  npm install
  npm start
- COMANDO para recarregar de forma automática os produtos no banco de dados sqlite:
  ```
  npx knex seed:run
 - URL para acesso do projeto no browser:  
  http://localhost:3000  
  Nesta página principal é possível:
  - criar um novo produto no banco de dados sqlite, clicando no botão "Adicionar novo produto":
      - Uma nova página é aberta, onde o usuário pode digitar as informações do produto (Nome, descrição e preço), para em seguida clicar num botão para adicionar o produto. Após a inserção, a url é redirecionada para a página inicial que lista todos os produtos.
  - deletar do banco de dados sqlite o produto desejado junto com seus comentários do banco mongoDB, clicando no botão "Remover" do produto;
  - visualizar as informações e comentários do produto desejado, clicando no botão "Visualizar" do produto:
     - Uma nova página é aberta, mostrando as informações do produto e uma lista de comentários sobre o produto (armazenada via banco de dados mongoDB). 
     - O usuário pode deletar o produto visualizado (remove também todos os comentários relativos ao produto).
     - O usuário pode adicionar um novo comentário, informando o autor e o comentário, após a inserção o comentário já é adicionado a página.
     - O usuário pode deletar o comentário desejado.
     - O usuário pode voltar para a página principal que contém a lista de produtos.
     - O usuário pode editar as informações do produto:
       - Uma nova página é aberta e o usuário pode editar o nome, descrição ou o preço do produto, para em seguida clicar num botão para atualizar no banco de dados. Após a atualização, a url é redirecionada para a páginal inicial que lista todos os produtos.
   
   
