import './styles.css'
import heroImage from './hero.jpg'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');

    const contentContainer = document.getElementById('content')
    contentContainer.innerHTML = `
        <h1>The Restaurant</h1>
        <img class="hero" src=${heroImage} />
        <p>We named this restaurant the way our customers' refer to us when they talk about going out for a great dining experience.</p>
        <p>They say, "Honey, wanna go out to <strong>The Restaurant</strong> tonight?</p>
    `
});


