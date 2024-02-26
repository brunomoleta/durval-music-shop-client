# Durval Music Shop e-commerce front-end

## Descrição

Frontend de aplicação fullstack de um e-commerce de equipamentos musicais
onde usuários podem comprar e vender seus instrumentos.
A motivação da equipe foi de desevolver uma aplicação robusta para compor o portfólio de cada um.

## Table of contents

- [Visão geral](#visão-geral)
- [Tecnologias usadas](#tecnologias-usadas)
    - [React](#react)
    - [Outros](#outros)
- [Design](#design)
    - [Fluxo do usuário](#fluxo-do-usuário)
    - [Telas do app](#telas-do-app)
- [Links importantes](#links-importantes)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [Dependências de desenvolvimento](#dependências-de-desenvolvimento)
- [Instalação](#instalação)
- [Executar o projeto](#executar-o-projeto)
- [Arquitetura](#arquitetura)
- [Processo de trabalho](#processo-de-trabalho)
- [Aprendizado](#aprendizado)
- [O que desenvolver em seguida](#o-que-desenvolver-em-seguida)
- [Fontes úteis](#fontes-úteis)
- [Créditos](#crédito)
- [Autores](#autores)

## Visão geral

### Tecnologias usadas

#### React

- React Router Dom
- React Context
- React Hook Form

#### Outros

- Styled-components
- Radix UI
- Axios

### Design

#### Fluxo do usuário

- O primeiro print se refere a tela inicial da aplicação;
- Em seguida, o carrinho que apresenta os pedidos não finalizados dele.
  Aqui ele pode editar, esvaziar ou finalizar a compra;
- a telas 3 diz respeito ao login, que é um formulário em várias
  etapas. Primeiro email e em seguida senha;
- Na última o usuário logado dentro da dashboard;

#### Telas do app

![](./src/assets/docs/Durval-telas.jpg)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Links importantes

- Deploy frontend:  https://durval-music-shop.vercel.app/
- Deploy backend: https://loja-do-durval.onrender.com/
- Documentação do backend: https://github.com/brunomoleta/durval-music-shop-server

## Estrutura do projeto

### Scripts

- `dev`: Inicia o ambiente de desenvolvimento usando o Vite.
- `build`: Usado para construir o aplicativo para produção.
- `lint`: Executa o ESLint para linting e correção automática.
- `preview`: Usado para pré-visualizar o aplicativo construído usando o Vite.

Execute os scripts utilizando `npm run` ou `yarn run`.

### Dependências

### Dependências de desenvolvimento

### Instalação

1. Clone o repositório (front-end):

```bash
git clone git@github.com:brunomoleta/durval-music-shop-client.git
```

2. Clone o repositório (back-end):

```bash
git clone git@github.com:brunomoleta/durval-music-shop-server.git
```

Para mais informações sobre o back-end, verfique o README.md na raiz do projeto.

3. Instale as dependências:

```bash
npm install 

# ou 

yarn install
```

### Executar o Projeto

Execute o seguinte comando para iniciar o servidor:

```bash
# development
yarn dev

# production
yarn build
```

### Arquitetura

```
durval-music-shop-client/
│
├── node_modules/         Pacotes e dependências do projeto.
│
├── public/               Recursos públicos acessíveis diretamente.
│
├── src/                    Código-fonte da aplicação.
│   ├── assets/             Recursos estáticos como imagens, icones, etc.
│   ├── components/         Componentes reutilizáveis.
│   ├── hooks/              Hooks reutilizáveis.
│   ├── pages/              Componentes específicos de páginas.
│   ├── providers/          Componentes de gerenciamento de estado global.
│   ├── routes/             Componentes específicos de rotas.
│   ├── schemas/            Contexto de validação de dados.
│   ├── services/           Serviço de comunicação com API.
│   ├── styled-components/  Estilos globais da aplicação.
│   └── tests/              Testes unitários
│   └── types/              Tipagem dos components, funções e providers. 
```

## Processo de trabalho

- O principal componente da aplicação é o Modal;
- O usuário pode fazer um carrinho de compras(modal) e editá-lo;
- Além disso, a criação de conta e login ocorrem através dele;
- Dentro do dashboard do usuário autenticado, as ações de
CRUD acontecem no modal;


### Aprendizado

- Foi desafiador desenvolver nossa primeira aplicação
de React + Typescript;
-  

### O que desenvolver em seguida

### Fontes úteis

- [Josh Cameau's blog](https://www.joshwcomeau.com/) - The best frontend blog I know by far;
- [Radix UI](https://www.radix-ui.com/) - É uma mão na roda esta biblioteca de components não estilizados.
O Modal e o Dropdown são baseados nele;

## Crédito

#### Autores

#### Pessoas que nos ajudaram