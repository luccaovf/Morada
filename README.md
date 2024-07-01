# Desafio Técnico Morada.ai: Caixa Eletrônico API

## Sobre o desafio
Nesse respositório está minha implementação para o desfio proposto pela morada.ai para o processo de estágio da empresa. 
O desafio é a implementação de uma api para resolver o problema de troco, considerando as notas de 2, 5, 10, 20, 50 e 100 reais.
Para mais detahes acesse o repositório no github: [https://github.com/morada-ai/desafio-atm](https://github.com/morada-ai/desafio-atm) 

## Detalhes de desenvolvimento
O algoritmo foi desenvolvido em nodejs na versão v20.12.2 utilizando express como framework para o desenvolvimento do servidor web.

## Dificuldades do projeto
O meu instinto inicial para solucionar o problema foi uma abordagem de algoritmo guloso, indo pela maior nota primeiro e inserindo o máximo possível dela e depois fazendo o mesmo com o resto em ordem decrescente. Apesar de muito rapido essa arbodagem não funciona para todos cenários, mas eu deixei esse algoritmo para lidar com todos os valores divisiveis por 5, pois é uma situação onde o algoritmo funciona bem. Assim, o meu proximo pensamento foi utilizar programação dinâmica para resolver o problema e com a ajuda do ChatGPT eu implementei o código. Nessa arbodagem, no vetor dp é guardado o minimo de cedulas para um tamanho i e em outro vetor eu guardo as notas que estão sendo usadas.

## Instruções de uso
Para utilizar o código desse repositório você deve ter nodejs instalado, assim como um gerenciador de pacotes como npm ou yarn para instalar as dependências (nesse caso somente o express), geralmente ao instalar o node o npm também é instalado. Eu utilizei o npm e para as próximas instruções vou considerar ele como gerenciador de pacotes a ser usado.

Tendo isso em mente, você pode baixar o código aqui pelo github no botão <span style="color:green">Code</span> > Download ZIP, ou clonando o repositório, caso você tenha git instalado, com o comando `git clone https://github.com/seu-usuario/seu-repositorio.git`.

Com o código baixado vá para a pasta Codigo e instale as dependências com o comando `npm install`. Após, incie a aplicação com o comando `node index.js`.

Para fazer requisições para a API você pode usar sua linha de comando com o comando: `curl -X POST http://localhost:5000/api/saque -H "Content-Type: application/json" -d "{\"valor\": 500}"` (epecifique o valor desejado em {\"valor\": xxx}) ou usando um aplicativo como postman.
