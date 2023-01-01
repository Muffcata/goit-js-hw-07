import { galleryItems } from "./gallery-items.js";
// Change code below this line
const { log } = console;
const photos = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const innerBox = document.createElement("a");
  innerBox.classList.add("gallery__item");
  innerBox.href = item.original;
  photos.append(innerBox);

  const imageBox = document.createElement("img");
  imageBox.textContent = item;
  imageBox.src = item.preview;
  imageBox.alt = item.description;
  imageBox.classList.add("gallery__image");
  innerBox.append(imageBox);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: "250",
});
