// https://api.github.com/users/trandangkhoi

const endpoint = "http://localhost:8386/api/v1/product/search/query=akko";
const userEl = document.querySelector(".username");
// fetch -> trả về 1 promise

const getData = () => {
  const endpoint = fetch(endpoint);
  console.log(endpoint);
};
