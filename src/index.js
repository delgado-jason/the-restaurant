import './styles.css'
import renderHome from './modules/renderHome'
import heroImage from './hero.jpg'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
    renderHome(heroImage)
});


