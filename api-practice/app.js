// https://api.github.com/users/trandangkhoi

const endpoint = `https://api.github.com/users`;
const usernameElm = document.querySelector(".username");
// fetch data

async function displayUser(username) {
  // const promise = fetch(`${endpoint}/${username}`);
  // promise
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  try {
    usernameElm.textContent = "Loading...";
    const promise = await fetch(`${endpoint}/${username}`);
    const userData = await promise.json();
    usernameElm.textContent = `${userData.login}`;
  } catch (error) {
    console.log("No data found");
  }
}

displayUser("evondev");
