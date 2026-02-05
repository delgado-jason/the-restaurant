

const renderMenu = function () {
    const contentContainer = document.getElementById('content')
    contentContainer.innerHTML = ''
    contentContainer.innerHTML = `
        <h1>No Menu Here</h1>
        <p>We do everything <i>in house</i>! You wanna see what we got? Come on in!</p>
    `
}

export default renderMenu