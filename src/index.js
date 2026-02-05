import './styles.css'
import renderHome from './modules/renderHome'
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
    console.log('You clicked the "Home" button')
}

const handleMenuClick = () => {
    console.log('You clicked the "Menu" button')
}

const handleAboutClick = () => {
    console.log('You clicked the "About" button')
}