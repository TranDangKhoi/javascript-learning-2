/* 

*/

const images = document.querySelectorAll(".container img");
images.forEach((item) => {
  item.addEventListener("click", handleZoom);
});

function handleZoom(e) {
  console.log(e.target);
  const imgSrc = e.target.getAttribute("src");
  const lightboxTemplate = `
  <div class="lightbox">
        <div class="lightbox-content">
            <img src="${imgSrc}"
                alt="" class="lightbox-image">
        </div>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", lightboxTemplate);
}

document.body.addEventListener("click", function (e) {
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  }
});
