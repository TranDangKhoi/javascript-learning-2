let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y);
// the creation phase
/*
 * window: Global Object
 * this: window
 * thiết lập bộ nhớ cho biến -> lưu trữ function vào trong bộ nhớ và gán giá trị cho tụi nó
 * x: undefined (biến nằm trong global execution context)
 * timesTen: function (lưu trong memory heap)
 * y: undefined
 */
// the execution phase
/*
 * Global Object: window
 * this: window
 * x: 10
 * timesTen: function
 * y: timesTen
 */
// function execution context
// creation phase
/*
 * Global Object: arguments
 * this: window
 * a: undefined
 */
// execution phase
/*
 * Global Object
 * this: window
 * a: 10
 */
