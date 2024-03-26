document.addEventListener('astro:page-load', () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('#navigation').classList.toggle('expanded');
    });
})

