const link = document.querySelector(".link");

link.addEventListener("click", function (e) {
  e.preventDefault();
  // Lấy custom attribute data-name bên HTML
  // e.target.dataset.name
  const name = e.target.dataset.name;
  console.log(name);
  // Vậy giả dụ bây giờ phần attribute là data-first-name thì sao
  const firstName = e.target.dataset.firstName;
  console.log(firstName);
});
