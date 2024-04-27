const stickySections = [...document.querySelectorAll('.sticky')]

let images = [
    'images/quentintarantino.png',
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scrollsection').appendChild(image)
    })
})

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
}