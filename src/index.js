import './styles.css'
import heroImage from './hero.jpg'

const image = document.createElement('img')
image.src = heroImage
image.className = 'hero'

const mainContent = document.getElementById('content')
mainContent.appendChild(image)

console.log('Bundled successfuly!')