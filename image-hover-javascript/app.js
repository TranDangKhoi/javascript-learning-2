window.addEventListener("load", function () {
  const imageCover = document.querySelector(".product-img-cover");
  imageCover.addEventListener("mousemove", handleHoverImage);
  const imageWrapper = document.querySelector(".product-img-wrapper");
  const image = document.querySelector(".product-img");
  // lấy ra chiều cao - rộng của thẻ wrap ảnh
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  function handleHoverImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    // lấy ra chiều cao - rộng thực sự của ảnh
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    imageWidth = imageWidth + spaceX;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    imageHeight = imageHeight + spaceY;
    // lấy ra tỉ lệ thực sự của ảnh
    // trục ngang: lấy ra kích thước của ảnh, ví dụ ảnh 900x800 thì 900px / imageWrapperWidth (450px) / 2
    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;
    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`;
  }
  imageCover.addEventListener("mouseleave", handleLeaveImage);
  function handleLeaveImage() {
    image.style = "";
  }
});
