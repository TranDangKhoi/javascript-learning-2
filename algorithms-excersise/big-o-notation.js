// 1. Big O Notation
// O(1): [].push(item) - BEST
// O(n): 1 vòng lặp for - OK
// O(logn): for([].push(item)) - GOOD
// O(n^2): 2 vòng for lồng nhau (nested loop) - nên hạn chế vì hiệu năng rất chậm - BAD
// O(n!): Tệ nhất vì hiệu năng rất 50/50, có thể nhanh có thể chậm - TERRIBLE

function factorial(n) {
  let num = n;
  for (let index = 0; index < n; index++) {
    num = factorial(n - 1);
  }
  return;
}
