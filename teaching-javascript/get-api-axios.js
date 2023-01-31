class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://icanhazdadjoke.com",
      timeout: 5000,
    });
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();
const getJokesBtn = document.querySelector(".get-joke-btn");
const jokeHeading = document.querySelector(".joke-heading");

getJokesBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  // http
  //   .get("/", {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     jokeHeading.textContent = res.data.joke;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const res = await http.get("/", {
    headers: {
      Accept: "application/json",
    },
  });
  console.log(res);
});
