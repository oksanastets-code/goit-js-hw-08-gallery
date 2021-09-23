import galleryItems from './data/gallery-items.js';

// Render gallery

const galleryCollection = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryCollection.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
    }).join('');
}

// Open and close lightbox
// Closing lightbox by click on overlay

const closeLightboxBtn = document.querySelector('[data-action="close-lightbox"]');
const lightbox = document.querySelector('.js-lightbox');
const overlay = document.querySelector('.lightbox__overlay');
const lightboxImage = document.querySelector('.lightbox__image');

galleryCollection.addEventListener('click', onOpenLightbox);
closeLightboxBtn.addEventListener('click', onCloseLightbox);
overlay.addEventListener('click', onCloseLightbox);

function onOpenLightbox(event) {
    event.preventDefault();
    // Quard Clause
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    lightbox.classList.add('is-open');
   
    // Bigger image in lightbox
    lightboxImage.src = `${event.target.dataset.source}`;

    // Clear src attribute
    const isCurrentImage = lightboxImage.src !== '';
    if (!isCurrentImage) {
        lightboxImage.src = '';
    }
    }
    
 function onCloseLightbox() {
        lightbox.classList.remove('is-open');
    }

 // Closing lightbox by enter "Esc" button
document.addEventListener('keydown', onEscBtnPress) 
    
function onEscBtnPress(event) {
    if (!lightbox.classList.contains('is-open')) {
        return;
    }
    if (event.code === 'Escape') {
         lightbox.classList.remove('is-open');
    }
}

// Sliding images by pressing => and <=
document.addEventListener('keydown', onSlide);

const getOriginalArray = (images) => {
    return images.map(image => image.original);
};
const originalArray = getOriginalArray(galleryItems);

function onSlide(event) {
    const currentIndex = originalArray.indexOf(lightboxImage.src);
    console.log(currentIndex);
    if (event.code === 'ArrowLeft') {
        onLeftBtnPress(currentIndex);
    }
    else
        if (event.code === 'ArrowRight') {
            onRightBtnPress(currentIndex);
    }
};

function onLeftBtnPress(currentIndex) {
    let nextIndex = currentIndex - 1;

    if (nextIndex === -1) {
        nextIndex = originalArray.length - 1;
    }
    lightboxImage.src = `${originalArray[nextIndex]}`;
};
function onRightBtnPress(currentIndex) {
    let nextIndex = currentIndex + 1;

   if (nextIndex === originalArray.length) {
        nextIndex = 0;
    }
    lightboxImage.src = `${originalArray[nextIndex]}`;
}
