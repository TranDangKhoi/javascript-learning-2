window.addEventListener("load", function () {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = this.elements["username"].value;
    const gender = this.elements["gender"].value;
    console.log({ username, gender });
    const sport = this.elements["sport"];
    let sportValues = [];
    [...sport].forEach((item) => sportValues.push(item.value));
    console.log(sportValues);
  });
});
