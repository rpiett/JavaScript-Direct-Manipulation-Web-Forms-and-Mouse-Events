const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1','pic2','pic3','pic4','pic5'];

/* Looping through images */
for (const image of imageArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}.jpg`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', event => {
    const image = event.target.currentSrc;
    displayedImage.setAttribute('src',image);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', event =>{
    if(event.target.getAttribute('class') == 'dark'){
        event.target.setAttribute('class','light');
        event.target.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        event.target.setAttribute('class','dark');
        event.target.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

})