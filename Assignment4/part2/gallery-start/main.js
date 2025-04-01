// Name: Nathan Bricknell
// Date: March 31, 2025
// Purpose: Create a clickable photo array which allows you to darken and lighten the images

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNamesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', "pic4.jpg", 'pic5.jpg']

/* Declaring the alternative text for each image file */
const AltNames = {
    'pic1.jpg': 'Close up of an eye',
    'pic2.jpg': 'Abstract waves',
    'pic3.jpg': 'Flowers',
    'pic4.jpg': 'Egyption Tabloid',
    'pic5.jpg': 'Moth'
};
/* Looping through images */

for (const pictures of fileNamesArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${pictures}`);
    newImage.setAttribute('alt', AltNames[pictures]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
      displayedImage.src = newImage.src;
      displayedImage.alt = newImage.alt;
    });
  }
  
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})