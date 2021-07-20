#  Conteúdo

## JSX

Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada `textJSX` , e o incorpore em uma tag `h1` .

## Classes e React
Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:

1.  Crie um novo projeto utilizando  `npx create-react-app nome-app`

-   ⚠️  **Substitua o  `nome-app`  pelo que você desejar para seu app** ⚠️

2.  Na pasta  `src`  , acesse  `App.js`  e remova todo o conteúdo da função  `App`  , de modo que ela fique assim:


```jsx
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return ();
    }

    export default App;
```

3.  Na pasta  `src`  , crie um arquivo chamado  `Component.js`  crie um componente que retorne um  `<h1>`  com o seu nome um paragráfo,  `<p>`  , com uma breve descrição sobre você.

-   Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um  `<div>`  .

4.  Importe seu componente em  `App.js`  de modo que ele seja renderizado na tela quando a aplicação for iniciada,  `npm start`  .

-   Para isso você precisará utilizar o  `export default`  para exportar seu componente, o  `export default`  é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo  `Component.js`  deverá ficar da seguinte forma:


```jsx
    export default Component;
```

5.  Execute sua aplicação,  `npm start`  , e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns 🎉