import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const item = document.querySelector(".gallery")

const images = galleryItems.map(i => `<img src = "${i.preview}" data-source="${i.original}" alt="${i.description}" width="350" height="300"  class="img"></img>`).join("")
item.insertAdjacentHTML("beforeend" ,images)


item.style.display = "flex"
item.style.flexWrap = "wrap"
item.style.listStyle = "none";


item.addEventListener("click",e => {
    if(e.target == item) {
        return
    }
    
    const selectedImage = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
    instance.show()

})
