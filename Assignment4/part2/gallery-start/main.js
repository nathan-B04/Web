// Name: Nathan Bricknell
// Date: March 31, 2025

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNamesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', "pic4.jpg", 'pig5.jpg']

/* Declaring the alternative text for each image file */
const AltNames = {
    'pic1.jpg': 'Picture 1',
    'pic2.jpg': 'Picture 2',
    'pic3.jpg': 'Picture 3',
    'pic4.jpg': 'Picture 4',
    'pic5.jpg': 'Picture 5'
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

