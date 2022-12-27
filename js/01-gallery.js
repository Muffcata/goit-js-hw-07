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

  box.append(innerBox);
  const imageBox = document.createElement("img");
  imageBox.textContent = item;
  imageBox.classList.add("gallery__image");
  innerBox.append(imageBox);
});
