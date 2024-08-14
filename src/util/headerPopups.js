
export function headerPopups () {
    
    const searchEl = document.querySelector('.top-nav-menu-search .search-form-wrap');
    const loginEl = document.querySelector('.top-nav-menu-login .login-form-wrap');
    
    // PC의 경우 로그인,검색 팝업을 ESC키로 닫을 수 있게 하기
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            e.preventDefault();            
            loginEl.classList.remove('login-activate');
            searchEl.classList.remove('search-activate');
        }
    });

    document.querySelector('.top-nav-menu-search .search-icon').addEventListener('click', () => {
        searchEl.classList.add('search-activate');
        // let element = document.querySelector('.search-form-wrap.search-activate');
        // let focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex:not([tabindex="-1"])');
        // let firstFocusable = focusable[0];
        // let lastFocusable = focusable[focusable.length - 1];
    })
    
    document.querySelector('.top-nav-menu-search .search-form-close').addEventListener('click', () => {
        searchEl.classList.remove('search-activate');
        // let focusClass = $(this).data("focus");
        // $('.' + focusClass).find('a').focus();
    });

    document.querySelector('.top-nav-menu-login .login-button').addEventListener('click', () => {
        loginEl.classList.add('login-activate');
        // let element = document.querySelector('.login-form-wrap.login-activate');
        // let focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex:not([tabindex="-1"])');
        // let firstFocusable = focusable[0];
        // let lastFocusable = focusable[focusable.length - 1];

    })

    document.querySelector('.top-nav-menu-login .login-form-close').addEventListener('click', () => {
        loginEl.classList.remove('login-activate');
    })
}
        