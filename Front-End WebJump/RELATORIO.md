# Retatório do Projeto

## Tecnologias utilizadas:

- HTML
- CSS
- JavaScript
- JQuery 
- NodeJS
- NPM
- NPX 
- Gulp 
- Pug 
- Sass
- Watch
- Uglify

- No processo de desenvolvimento da página optei por usar o **Gulp** para automatizar alguns processos, tendo em vista o prazo para desenvolvimento, todo o código **.HTML** foi feito em **Pug** e convertido automaticamente pelo **Gulp**. O automatizador de tarefas foi usado para copiar todos os itens da pasta *.../source/* para a pasta *.../dist do projeto*, inclusive as imagens do layout.

- O Css foi dividido em partes, onde a **.main.scss** chama todas as outras. Onde todas são concatenadas no arquivo final **.css** da pasta ..*./dist*.

- Alguns ícones não estavam presentes na media original do projeto, então ícones como "filtrar em grade ou lista" foram feitos vetorizados no **illustrator** para que o design ficasse o mais fiel possível, também houve adição de ícones para um menu sanduiche quando atinge o tamanho de 320px, o mesmo também se encontra funcional 

- Projeto foi feito todo com a extensão **Live Server** do Visual Studio Code.