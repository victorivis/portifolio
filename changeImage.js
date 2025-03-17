function changeImage(direction, event) {
    event.stopPropagation();

    const pai = event.target.parentNode;
    const images = pai.querySelectorAll('.images img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[activeIndex].classList.remove('active');
    
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    const imgSrc = images[newIndex].getAttribute('src');
    pai.style.setProperty("--url", `url(${imgSrc})`);

    images[newIndex].classList.add('active');
}