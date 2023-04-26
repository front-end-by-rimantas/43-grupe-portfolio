function header() {
    const headerDOM = document.querySelector('.main-header');

    const scrollHeightLimit = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollHeightLimit) {
            headerDOM.classList.add('scrolled');
        } else {
            headerDOM.classList.remove('scrolled');
        }
    });
}

export { header };
