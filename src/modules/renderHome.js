

const renderHome = function (img) {
    const contentContainer = document.getElementById('content')
    contentContainer.innerHTML = ''
    contentContainer.innerHTML = `
        <h1>The Restaurant</h1>
        <img class="hero" src=${img} />
        <p>We named this restaurant the way our customers' refer to us when they talk about going out for a great dining experience.</p>
        <p>They say, "Honey, wanna go out to <strong>The Restaurant</strong> tonight?</p>
    `
}

export default renderHome