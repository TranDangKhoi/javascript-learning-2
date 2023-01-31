// Currying là một function và function đó return về một function khác

function findOddNum(num) {
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

const value = findOddNum(10)((number) => number % 2 === 0);
console.log(value);
