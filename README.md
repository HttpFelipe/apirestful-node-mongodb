# API RESTful NodeJS + Express + Mongo (CRUD) e autenticação(JWT)

Este projeto é uma API RESTful com recursos de autenticação de usuário. Ele fornece endpoints para registrar novos usuários, autenticar usuários, gerenciar usuários (obter todos os usuários, obter usuário por ID, atualizar usuário por ID, excluir usuário por ID) e possui recursos de proteção de rotas usando tokens JWT (JSON Web Tokens).

## Funcionalidades

- Registro de usuário: Os usuários podem se registrar fornecendo informações como nome, email e senha. O sistema verifica se o usuário já existe antes de criar um novo registro.
- Autenticação de usuário: Os usuários podem autenticar-se fornecendo seu email e senha. O sistema verifica se as credenciais são válidas e retorna um token JWT que pode ser usado para autenticar solicitações subsequentes.
- Gerenciamento de usuários: Obter todos os usuários, obter usuário por ID, Atualizar usuário por ID e Excluir usuário por ID.
- Criptografia de senha com Bcrypt

## Ferramentas utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js
- Postman

## Configuração do Projeto

No arquivo authenticate.js, na pasta de middlewares o arquivo auth.json está sendo referenciado para a constante authConfig. Neste arquivo está a secret utilizada para a autenticação. Basta criar um arquivo auth.json na pasta config com a secret.
