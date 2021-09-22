const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Render gallery on page

const galleryList = document.querySelector('.js-gallery');

const makeGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery__link');
  galleryLinkEl.href = original;
  galleryLinkEl.dataset.action = 'open-ligthbox';

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.dataset.source = original;
  galleryImage.alt = description;

  galleryLinkEl.appendChild(galleryImage);
    galleryItem.appendChild(galleryLinkEl);
    return galleryItem;
}
const galleryCollection = galleryItems.map(makeGalleryItem);

galleryList.append(...galleryCollection);
console.log(galleryList);



// Open and close lightbox


// galleryList.setAttribute('data-action', 'open-lightbox');
// console.log(galleryList.getAttribute);
const closeLightboxBtn = document.querySelector('[data-action="close-lightbox"]');
const lightbox = document.querySelector('js-lightbox');

// galleryList.addEventListener('click', actionLightboxToggle);
galleryList.addEventListener('click', onGalleryListClick);

// closeLightboxBtn.addEventListener('click', actionLightboxToggle);

function actionLightboxToggle(event) {
  console.log(event.target);
  lightbox.classList.toggle('is-open');
}
function onGalleryListClick(event) {
  console.log(event.target);
}

// galleryCollection.addEventListener('click', actionLightboxToggle);
// closeLightboxBtn.addEventListener('click', actionLightboxToggle);

// function actionLightboxToggle(event) {
//     event.preventDefault();
//     // if (event.target.nodeName !== 'IMG') {
//     //     return;
//     // }
//     console.log(event.target.nodeName);
//   lightbox.classList.toggle('is-open');
// }