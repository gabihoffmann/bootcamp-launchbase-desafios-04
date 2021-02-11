<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>
<h3 align="center">
  Desafios Módulo 4 - Controle de Academia 🏋️
</h3>
<br/>
<blockquote align="center">"It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences." - Audre Lorde</blockquote>
<br/>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>
  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

<p align="center">
    <a href="#rocket-desafios">Desafios</a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#hand-pré-requisitos">Pré requisitos</a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#fire-instalação-e-execução">Instalar e executar</a>
</p>

## :rocket: Tecnologias

- ⚡ Express — A web framework for Node.js
- 🥷 Nunjucks — A view engine for JavaScript from Mozilla

## :hand: Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## :fire: Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd bootcamp-launchbase-desafios-04`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn dev` para iniciar o servidor.

## :rocket: Desafios

Nesse módulo o desafio é criar um site de aulas particulares. Aplicando em pequenas doses, os conhecimentos aprendidos.

- [Estrutura base](#)
  - [x] init project
  - [x] servidor
  - [x] view engine
  - [x] arquivos estáticos
- [Header](#)
  - [x] header com dois links: Teachers e Students
    - [x] aplicar um background
    - [x] utilizar a fonte Roboto
    - [x] utilizar conceito de `box-sizing` e o seletor `+`
    - [x] utilizar o `after` e o `transition` para aplicar um efeito visual nos links
- [Card do Professor](#)
  - [x] lib browser-sync
  - [x] lib npm-run-all
  - [x] card teacher
    - [x] descrição
      - [x] duas seções: imagem e detalhes
      - [x] imagem randômica de uma coleção de professores (utilize a api do unsplash);
        - [x] Nome completo
        - [x] Idade
        - [x] Grau de escolaridade (ex.: Doutorado)
        - [x] Tipo de aula (presencial ou à distância)
        - [x] Acompanhamento (ex.: Matemática e Física)
        - [x] Desde (data de cadastro na plataforma)
    - [x] estilização
      - [x] imagem deve ocupar 40% do card e os detalhes 60%
      - [x] utilize o seletor `first-child` e `border-top` para estilizar as divisórias entre os items
      - [x] utilize o seletor `nth-child()` para estilizar o label (ex.: Desde) e valor (ex.: 02/02/2020) do item
      - [x] utilize o keyframes e o animation para fazer uma animação do card
      - [x] utilize o box-shadow para aplicar uma sombra no card
- [Formulário e Rota de cadastro do Professor](#)
  - [] criar formulário de cadastro de professor
    - [] avatar url: campo do tipo `url` para cadastrar o caminho da imagem do professor;
    - [] nome completo: campo do tipo `text`;
    - [] data de nascimento: campo do tipo `date`;
    - [] grau de escolaridade: campo do tipo `select` ([documentação do select](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select)) que deve conter as opções **Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado**;
    - [] tipo de aula: campo do tipo `radio` que deve conter as opções **Presencial e À distância**;
    - [] área de atuação: campo do tipo `text` que deve conter as informações das matérias que o professor pode lecionar.
  - [] rota tipo `post` para validar e salvar os dados
    - [] crie um arquivo `teachers.js`
    - [] validação dos campos utilizando `keys` e o constructor `Object`
    - [] utilizar o método `writeFile` da lib `fs` para gerar um arquivo json
    - [] armazenar em um array todos os professores cadastrados
    - [] após validação e salvamento, redirecionar para a página de listagem de professores.
- [Apresentação, edição e formatação dos dados de um professor]()
- [HTTP: PUT e DELETE]()
- [Listagem de professores]()
- [Estruturando estudantes]()
- [Administração do Foodfy]()

## 👩‍💻 Autora

_"Quanto mais estudo, mais aprendo e mais próximo estou de realizar meus sonhos!"_ 🤍 [Gabi Hoffmann](https://www.linkedin.com/in/agfhoffmann)

## ✌️ Agradecimentos

thanks [Rocketseat 🚀](https://rocketseat.com.br/)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
