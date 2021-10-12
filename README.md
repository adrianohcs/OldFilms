# OldFilms
Repositório de filmes antigos em JavaScript e interação com o usuário usando readlineSync.

### Para acessar o projeto:
1. Após clonar o repositório, é possível iniciar o projeto através de `node app.js` no terminal (instrução "Start" referida no `package.json`);
2. é necessário o pacote `readline-sync` do npm, sendo baixado automaticamente para sua execução;

### Para interagir com o projeto:
1. Após o início do projeto, é possível escolher entre algum filme após *digitar Y no terminal* ou visualizar os filmes disponíveis em `database.js` após *digitar N no terminal*. Não há diferenciação entre maiúsculas ou minúsculas neste caso (`firstInput.toLocaleUpperCase()` garante a validade da entrada do usuário).
2. Caso deseje escolher algum filme, a entrada do usuário **diferencia maiúsculas ou minúsculas**, sendo guiado pela coluna de gêneros que aparecerá no terminal.
