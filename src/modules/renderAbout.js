

const renderAbout = function () {
    const contentContainer = document.getElementById('content')
    contentContainer.innerHTML = ''
    contentContainer.innerHTML = `
        <h1>Why We Are the Hottest Joint in Town</h1>
        <h2>The Food of Course!</h2>
        <p>All of our food is made with love. Just like how your grandma did it! We bring over 100 years of culinary talent and dedication to you at the best costs around.</p>
    `
}

export default renderAbout