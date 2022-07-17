//   core:
//  thay đổi index của biến images thì sẽ thay đổi imgSrc
// các chức năng:
// click ra ngoài thì đóng lightbox
// click vào dấu X thì đóng lightbox
// di chuyển giữa các ảnh

const images = document.querySelectorAll(".container img");
[...images].forEach((item) => {
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
  const lightboxImage = document.querySelector(".lightbox-image");
  let lightboxSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-close")) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  } else if (e.target.matches(".lightbox-next")) {
    lightboxSrc = lightboxImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightboxSrc
    );
    index += 1;
    if (index > images.length - 1) {
      index = 0;
    }
    const newSrc = [...images][index].getAttribute("src");
    lightboxImage.setAttribute("src", newSrc);
  } else if (e.target.matches(".lightbox-prev")) {
    lightboxSrc = lightboxImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightboxSrc
    );
    index -= 1;
    if (index < 0) {
      index = images.length - 1;
    }
    const newSrc = [...images][index].getAttribute("src");
    lightboxImage.setAttribute("src", newSrc);
  }
});
