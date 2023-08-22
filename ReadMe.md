# Calculadora Digital - Testes Automatizados com Cypress

Este é um projeto de testes automatizados para a calculadora digital, utilizando a ferramenta de teste end-to-end Cypress. Os testes têm o objetivo de verificar as operações matemáticas básicas, incluindo soma, subtração, multiplicação e divisão, bem como lidar com cenários especiais como a divisão por zero.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema. Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Executando os Testes

Para executar os testes automatizados, utilize o seguinte comando:

```bash
npm run test
```

Isso abrirá a interface do Cypress, onde você poderá selecionar os navegadores nos quais deseja executar os testes. Os testes serão executados automaticamente, e os resultados serão exibidos em tempo real.

## Cenários de Teste

### Operação de Soma

Este teste verifica se a calculadora executa corretamente a operação de soma. Ele simula a seguinte sequência de cliques: clicar no botão "+", clicar no botão "2", clicar no botão "=", clicar no botão "4". Em seguida, verifica se o resultado exibido na calculadora é igual a 6.

### Operação de Subtração

Este teste verifica se a calculadora executa corretamente a operação de subtração. Ele simula a seguinte sequência de cliques: clicar no botão "-", clicar no botão "3", clicar no botão "=", clicar no botão "1". Em seguida, verifica se o resultado exibido na calculadora é igual a 2.

### Operação de Multiplicação

Este teste verifica se a calculadora executa corretamente a operação de multiplicação. Ele simula a seguinte sequência de cliques: clicar no botão "*", clicar no botão "4", clicar no botão "=", clicar no botão "5". Em seguida, verifica se o resultado exibido na calculadora é igual a 20.

### Operação de Divisão

Este teste verifica se a calculadora executa corretamente a operação de divisão. Ele simula a seguinte sequência de cliques: clicar no botão "/", clicar no botão "8", clicar no botão "=", clicar no botão "2". Em seguida, verifica se o resultado exibido na calculadora é igual a 4.

### Divisão por Zero

Este teste verifica a manipulação de um cenário especial: a divisão por zero. Ele simula a seguinte sequência de cliques: clicar no botão "/", clicar no botão "2", clicar no botão "=", clicar no botão "0". Em seguida, verifica se o resultado exibido na calculadora é igual a "Infinity".

## Conclusão

Esses testes automatizados proporcionam uma cobertura básica das operações matemáticas oferecidas pela calculadora digital. Eles são essenciais para garantir que as funcionalidades da calculadora estejam funcionando conforme o esperado e também para lidar com cenários de erro.