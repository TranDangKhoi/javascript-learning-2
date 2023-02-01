// Currying là một function và function đó return về một function khác

function findNum(num) {
  return function (func) {
    const result = [];
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}

const value = findNum(10)((number) => number % 2 === 0);
const value2 = findNum(10)((number) => number % 2 === 1);
console.log(value);
console.log(value2);
