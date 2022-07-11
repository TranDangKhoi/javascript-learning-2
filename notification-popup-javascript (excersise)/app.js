// Start
// Viết 1 function tạo ra thông báo
const createNotification = (title = "Welcome to notification") => {
  const notiTemplate = `
    <div class="noti">
        <img src="https://source.unsplash.com/random" alt="Image" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas sapiente ea eum nobis accusamus vitae ullam necessitatibus, eaque quibusdam
                autem aperiam architecto odit?
            </p>
        </div>
    </div>
    `;
  // insertAdjacentHTML
  const body = document.body;
  body.insertAdjacentHTML("afterbegin", notiTemplate);
};

const randomTitle = [
  "Welcome to Froggy Gaming",
  "PGL Major 2022 is happening right now",
  "Save this video before it's too late",
  "This tiktok video got 30M likes!",
  "I can't breathe",
];

let lastTitle;

const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  // lấy ra random title trong mảng randomTitle
  if (item) {
    item.parentNode.removeChild(item);
  }
  const title = randomTitle[Math.floor(Math.random() * randomTitle.length)]; // có bao nhiêu item trong mảng thì dùng Math.random x với từng đấy
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 4000);
