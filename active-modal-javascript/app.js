const template = `
<div class="modal">
<div class="modal-content">
<i class="fa-solid fa-xmark modal-close"></i>
<div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium repellendus eum, quos nisi, similique autem recusandae
consequuntur at incidunt deleniti atque commodi dolore delectus laboriosam distinctio. Saepe, rerum illum!</div>
<div class="modal-action">
<button class="modal-submit">Confirm</button>
<button class="modal-cancel">Cancel</button>
</div>
</div>
</div>
`;

const body = document.body;
body.insertAdjacentHTML("afterbegin", template);

// Active Modal
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
console.log(modal);
if (modal) {
  setTimeout(function () {
    modalContent.classList.add("is-active");
    modal.classList.add("is-active");
  }, 3000);
}
