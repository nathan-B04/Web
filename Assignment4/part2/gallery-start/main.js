// Name: Nathan Bricknell
// Date: March 31, 2025

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNamesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', "pic4.jpg", 'pig5.jpg']
const AltNames = {
    'pic1.jpg': 'Picture 1',
    'pic2.jpg': 'Picture 2',
    'pic3.jpg': 'Picture 3',
    'pic4.jpg': 'Picture 4',
    'pic5.jpg': 'Picture 5'
};

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

newImage.addEventListener('CLick', () => {
    displayedImage.setAttribute('src', `images/${fileNamesArray}`);
})
/* Wiring up the Darken/Lighten button */
