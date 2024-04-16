import Hero from '../assets/images/hero.jpeg';

const contentDiv = document.getElementById('content');

const heroImg = new Image();
heroImg.src = Hero;

contentDiv.appendChild(heroImg);