import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const item = document.querySelector(".gallery")


const images = galleryItems.map(i => `<a class="gallery__link" href="${i.original}">
<img class="gallery__image" src="${i.preview}" alt="${i.description}" />
</a>`).join("")
item.insertAdjacentHTML("beforeend",images)

item.addEventListener("click",e => {
    e.preventDefault()
    if(e.target === item) {
        return
    }
	
})
new SimpleLightbox('.gallery a', {captionDelay:250,captionPosition:"botton",captionsData:"alt"});


