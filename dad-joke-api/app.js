// https://icanhazdadjoke.com/

const $ = document.querySelector.bind(document);
const joke = $(".joke");
const jokeHeading = $(".joke-heading");
const jokeButton = $(".joke-button");
const apiEndpoint = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const res = await fetch(apiEndpoint, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function handleClick() {
  joke.classList.add("is-loading");
  const data = await getJokes();
  joke.classList.remove("is-loading");
  jokeHeading.textContent = `${data.joke}`;
}

jokeButton.addEventListener("click", handleClick);
