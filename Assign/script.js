let designs = document.getElementById('designs');
let imageContainer = document.getElementById('images');
const images = document.getElementsByClassName('images');

const infoDiv = document.createElement('div');
const divText = document.createElement('p');
const button = document.createElement('button');

infoDiv.classList.add('container');
divText.classList.add('text');
button.classList.add('close');

infoDiv.appendChild(divText)
infoDiv.appendChild(button)
button.innerText = 'Close'
divText.innerText = 'This website does not actually exist. However, this image was obtained at www.hostinger.com'

function imageClicked(event){
    designs.replaceChild(infoDiv, imageContainer);
}

for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click', imageClicked);
}

button.addEventListener('click', function(){
    designs.replaceChild(imageContainer, infoDiv);
})
