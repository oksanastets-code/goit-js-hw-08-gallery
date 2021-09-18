import galleryItems from './data/app.js';
console.log(galleryItems);



const makeGalleryItem = ({ preview }) => {
    const galleryItem = document.createElement('li');

    const galleryEl = document.createElement('img');
    galleryItem.src = preview;

    galleryItem.append(galleryEl);
    return galleryItem;
}
console.log(makeGalleryItem(galleryItems[0]));