const returnArrayDivision = (result) => {
  const divisors = [2, 3, 5, 10];
  return divisors.map((divisor) => result / divisor);
};

const promise = new Promise((resolve, reject) => {
  const arrayOfNumbers = [];

  for (let counter = 1; counter <= 10; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    arrayOfNumbers.push(randomNumber ** 2);
  }
  const sumOfAllElements = arrayOfNumbers
    .reduce((accumulator, element) => accumulator + element);

  if (sumOfAllElements < 8000) {
    return resolve(returnArrayDivision(sumOfAllElements));
  } else {
    reject('É mais de oito mil! Essa promise deve estar quebrada!');
  }
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));