import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const createGallaryItem = ({ preview, original, description }) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  return wrapper.firstElementChild;
};
const clearGallary = ref => {
  ref.innerHTML = '';
};
const renderGallaryItems = (items, ref) => {
  clearGallary(ref);
  const gallaryCard = items.map(item => createGallaryItem(item));
  ref.append(...gallaryCard);
};

const fullSizeImageHandler = e => {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;

  const instance = basicLightbox.create(
    ` <img src="${e.target.dataset.source}" width="800" height="600" alt="${e.target.alt}"/>`,
  );
  instance.show();

  galleryRef.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
};

renderGallaryItems(galleryItems, galleryRef);
galleryRef.addEventListener('click', fullSizeImageHandler);
