const getJokesBtn = document.querySelector(".get-joke-btn");
const jokeHeading = document.querySelector(".joke-heading");

getJokesBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  jokeHeading.textContent = data.joke;
});
