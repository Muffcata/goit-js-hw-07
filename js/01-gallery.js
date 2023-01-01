import { galleryItems } from "./gallery-items.js";
// Change code below this line

const { log } = console;
const photos = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const box = document.createElement("div");
  box.classList.add("gallery__item");
  photos.append(box);
  const innerBox = document.createElement("a");
  innerBox.classList.add("gallery__link");
  innerBox.href = item.original;

  box.append(innerBox);
  const imageBox = document.createElement("img");
  imageBox.textContent = item;
  imageBox.src = item.preview;
  imageBox.alt = item.description;
  imageBox.dataset.source = item.original;
  imageBox.classList.add("gallery__image");
  innerBox.append(imageBox);
});

const choosePhotos = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${e.target.dataset.source} />`
  );
  instance.show();
  if (instance.visible()) {
    window.addEventListener("keydown", (e) => {
      e.key === "Escape" && instance.close();
      //   if (e.key === "Escape") {
      //     instance.close();
      //   }
    });
  }
};

photos.addEventListener("click", choosePhotos);
