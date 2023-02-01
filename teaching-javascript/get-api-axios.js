class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://icanhazdadjoke.com",
      timeout: 10000,
      headers: {
        Accept: "application/json",
      },
    });
  }

  getJoke(url) {
    // localhost:3000/v1/api
    // url: /products, /users
    return this.instance.get(url);
  }
}

const http = new Http();
const getJokeBtn = document.querySelector(".get-joke-btn");
const jokeContent = document.querySelector(".joke-content");

getJokeBtn.addEventListener("click", fetchCauDua);

async function fetchCauDua() {
  const response = await http.getJoke("/");
  jokeContent.textContent = response.data.joke;
}
