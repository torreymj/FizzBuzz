const counter = x => {
  let output = [];
  for (let i = 1; i <= x; i += 1) {
    output.push(i);
  }
  return output;
};

const fizz = x => x %  3 === 0 ? "Fizz"     : x;
const buzz = x => x %  5 === 0 ? "Buzz"     : x;
const fibu = x => x % 15 === 0 ? "FizzBuzz" : x;

const play = x => {
  let numbers = counter(x);
  numbers.map(y => buzz(fizz(fibu(y))));
  return numbers;
};

// const play = x => {
//   let output = [];
//   let numbers = counter(x);
//   for ( let i = 0; i < numbers.length; i += 1 ) {
//     output.push(buzz(fizz(fibu(numbers[i]))));
//   }
//   return output;
// };

module.exports = {
  counter,
  fizz,
  buzz,
  fibu,
  play
};
