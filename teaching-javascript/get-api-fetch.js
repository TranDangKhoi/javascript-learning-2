const getJokeButton = document.querySelector(".get-joke-btn");
const jokeContent = document.querySelector(".joke-content");
getJokeButton.addEventListener("click", fetchCauDua);

async function fetchCauDua() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  jokeContent.textContent = data.joke;
}
