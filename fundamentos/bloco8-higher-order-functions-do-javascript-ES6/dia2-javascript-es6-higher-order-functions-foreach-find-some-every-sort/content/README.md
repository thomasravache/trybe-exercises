# Conteúdo

## Array.forEach

#### Para fixar

**1 -** Use o método forEach chamando a callback  **showEmailList** para apresentar os emails

Copiar

```javascript
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
```

----------

**2 -** Leia e entenda este exemplo do  [forEach](https://codepen.io/pen/?template=LYZPEwV) feito no CodePen.

## Array.find


#### Para fixar

**1 -** Utilize o  `find`  para retornar o primeiro número do array que é divisível por  **3** e  **5** , caso ele exista:

Copiar

```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
}

console.log(findDivisibleBy3And5())
```

----------

**2 -** Utilize o  `find`  para encontrar o primeiro nome com cinco letras, caso ele exista:

Copiar

```javascript
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());
```

----------

**3 -** Utilize o  `find`  para encontrar a música com  **id** igual a  **31031685** , caso ela exista:

Copiar

```javascript
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
}

console.log(findMusic('31031685'))
```