# Portfolio
<img src=" https://i.imgur.com/DLvW1FR.png" width="500"/>  

## Sobre o Projeto

O objetivo inicial desse projeto era fazer a criação de um portfólio. Decidi que seria interessante automatizar esse processo utilizando a api do GitHub. Então fiz a criação de um sistema que gera um portfólio utilizando as informações dos README dos repositórios do usuário.
Também é utilizado o [README do próprio perfil](https://docs.github.com/pt/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) para para complementar com mais informações do usuário.
## Criado com

[React](https://pt-br.reactjs.org)  
[FramerMotion](https://www.framer.com/api/motion/)  
[StyledComponents](https://styled-components.com)  
[GithubApi](https://developer.github.com/v3/)  

### Pré requisitos
npm
```sh
npm install npm@latest -g
```

## Instalação

1. Clone esse repositório
```sh
git clone https://github.com/your_username_/Project-Name.git
```
2. Faça a instalação dos pacotes NPM
```sh
npm install
```
3. Configure o nome do seu usuário do GitHub no arquivo /src/pages/Portfolio.jsx na linha 16
4. Faça alterações necessárias no CSS para configurar o markdown
5. Gera a build para produção do seu portfolio
```sh
npm build
```