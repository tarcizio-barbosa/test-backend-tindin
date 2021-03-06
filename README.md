# Test Backend Tindin

Este é um projeto de backend para a vaga de Dev Backend da Tindin. Se trata de uma API sobre aulas de educação financeira. Esta API é capaz de cadastrar usuários. Que por sua vez poderão visualizar os vídeos de educação financeira e até comentar nestes vídeos.

## Descrição

Esta API foi construída sob as seguintes tecnologias:
- Toda a aplicação é escrita em Typescript;
- A aplicação utiliza o Express para a gestão das requisições HTTP;
- Foi o utilizado a lib Mongoose para realizar a conexão e queries com o bando de dados Atlas MongoDB;
- Utiliza também a lib Tsyringe para a injeção de dependências;
- E Jest para teste unitários.

A arquitetura deste projeto é voltada para o principio S do SOLID, onde é atribuída o menor número de responsabilidades possíveis aos arquivos.

Foi configura também o ESLint padrão Airbnb para maior legibilidade do código.

## Uso

Para iniciar a aplicação - `yarn dev`: Para iniciar o server.

Para iniciar os teste - `yarn test`: Para iniciar os testes.

Para testar as rotas, use importe o arquivo insomnia_routes dentro do Insomnia.

## Contato

Tarcizio Barbosa

tarcizio.barbosa@outlook.com

(91) 9 8482-7058