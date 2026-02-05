import './styles.css'
import renderHome from './modules/renderHome'
import renderAbout from './modules/renderAbout'
import renderMenu from './modules/renderMenu'
import heroImage from './hero.jpg'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.')
    renderHome(heroImage)

    // Add event listeners to each button
    const buttons = document.getElementsByTagName('button')
    Object.values(buttons).forEach(button => {
        const text = button.innerText
        if (text === 'Home') {
            button.onclick = handleHomeClick
        }

        if (text === 'Menu') {
            button.onclick = handleMenuClick
        }

        if (text === 'About') {
            button.onclick = handleAboutClick
        }
    })
})

// Click Handlers

const handleHomeClick = () => {
    renderHome(heroImage)
}

const handleMenuClick = () => {
    renderMenu()
}

const handleAboutClick = () => {
    renderAbout()
}