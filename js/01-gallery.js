import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const item = document.querySelector(".gallery")
const link = document.querySelector(".gallery__link")

const images = galleryItems.map(i => `<a class="gallery__link" href="${i.original}"><img src = "${i.preview}" data-source="${i.original}" alt="${i.description}" width="" height=""  class="gallery__image"></img></a>`).join("")
item.insertAdjacentHTML("beforeend",images)
item.classList.add("gallery__item")

item.addEventListener("click",e => {
    e.preventDefault()
    if(e.target === item) {
        return
    }
    
    const selectedImage = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
    instance.show()

})

