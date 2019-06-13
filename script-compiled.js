//Zadanie nr. 1.------------

const a = 'hello',
      b = 'world!';

console.log(`${a} ${b}`);

//Zadanie nr. 2.------------

const multiply = (a, b = 1) => a * b;

console.log(multiply(4, 5));
console.log(multiply(4, 8));
console.log(multiply(4));

//Zadanie nr. 3.------------

const average = (...args) => {

  let nums = [];
  args.forEach(arg => nums.push(arg));
  let total = nums.reduce((a, b) => {
    return a + b;
  });
  console.log(total / nums.length);
};

average(1, 3);

//Zadanie nr. 4.------------

// const average = (...args) => {

//   let nums = [];
//   args.forEach(arg => nums.push(arg));
//   let total = nums.reduce((a,b) => { return a + b; });
//   console.log(total/nums.length);

// }

// const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

// average(...grades);

//Zadanie nr. 5.------------

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,, third,, fifth] = data;
const firstName = third;
const lastName = fifth;

console.log(`Hello, ${firstName} ${lastName}, how are you doing today?`);
