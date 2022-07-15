/* 

*/

const images = document.querySelectorAll(".container img");
images.forEach((item) => {
  item.addEventListener("click", handleZoom);
});

function handleZoom(e) {
  const imgSrc = e.target.getAttribute("src");
  const lightboxTemplate = `
    <div class="lightbox">
    <div class="lightbox-close">
    <i class="fa-solid fa-xmark"></i>
    </div>
        <div class="lightbox-content">
                <i class="fa-solid fa-angle-left lightbox-prev"></i>
                <img src="${imgSrc}" alt="" class="lightbox-image">
                <i class="fa-solid fa-angle-right lightbox-next"></i>
        </div>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", lightboxTemplate);
}

let index = 0;
document.body.addEventListener("click", function (e) {
  const lightboxClose = document.querySelector(".lightbox-close");
  if (!lightboxClose) return;
  lightboxClose.addEventListener("click", function (e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });
  const lightboxImg = document.querySelector(".lightbox-image");
  if (!lightboxImg) {
    let lightboxSrc = lightboxImg.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightboxSrc
    );
  }
  lightboxSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    index = index + 1;
    if (index > images.length - 1) {
      index = 0;
    }
    displayNewImg(lightboxImg, index);
  } else if (e.target.matches(".lightbox-prev")) {
    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    displayNewImg(lightboxImg, index);
  }
});

function displayNewImg(image, index) {
  const newSrc = [...images][index].getAttribute("src");
  image.setAttribute("src", newSrc);
}
