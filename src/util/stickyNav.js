
export function stickyNav() {
    window.addEventListener('scroll', () => {
        const topNav = document.querySelector('#cate-nav');
        const scrollY = window.pageYOffset;
        (scrollY > 155) ? topNav.classList.add('active') : topNav.classList.remove('active')
    })
}
    