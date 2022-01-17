/*let time = 2000
let imageIndex = 0
let imagens = document.querySelectorAll('#slider img')


window.addEventListener('load', function(){
    setInterval(()=>{
        nextImage()
    },time)
})


function nextImage () {

    imagens[imageIndex].classList.remove('selected')

    imageIndex++

    if (imageIndex >= imagens.length) {
        imageIndex = 0
    }

    imagens[imageIndex].classList.add('selected')
}*/











/*
document.querySelector('#items').addEventListener('wheel', function(event) {
    if (event.deltaY > 0){
        event.target.scrollBy(300,0)
    } else {
        event.target.scrollBy(-300,0)
    }
    
})

document.querySelector('#items').addEventListener('mouseover', function() {
    console.log('foi')
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
})

document.querySelector('#items').addEventListener('mouseleave', function() {
    window.onscroll=function(){};
})
*/
