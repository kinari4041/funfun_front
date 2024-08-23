/**
 * @param {HTMLElement} con 
 */

export default function horizontalScroll(con) {

    let block; let lBt; let rBt;

    const conChild = con.childNodes
    const list = con.querySelector('.trend-project-list');
    const itemWidth = list.querySelector('.list-project-wrap').offsetWidth;

    conChild.forEach((child) => {
        if (child.classList.contains('right')) {
            rBt = child;
        } else if (child.classList.contains('left')) {
            lBt = child;
        } else {
            block = child;
        } 
    });

    buttonVisibility(block, lBt, rBt);
    
    const scrollHandler = () => {
        buttonVisibility(block, lBt, rBt);
    }

    const rightBtnHandler = (itemWidth) => {
        const scrollAmount = itemWidth * 2;
        const currentScroll = block.scrollLeft;
        block.scrollTo({left: currentScroll + scrollAmount, behavior: 'smooth'})
    }

    const leftBtnHandler = (itemWidth) => {
        const scrollAmount = itemWidth * 2;
        const currentScroll = block.scrollLeft;
        block.scrollTo({left: currentScroll - scrollAmount, behavior: 'smooth'})
    }

    // const itemWidth = '300';
    
    rBt.addEventListener('click', rightBtnHandler(itemWidth));
    lBt.addEventListener('click', leftBtnHandler(itemWidth));
    block.addEventListener('scroll', scrollHandler);

    return () => {
        rBt.removeEventListener('click', rightBtnHandler);
        lBt.removeEventListener('click', leftBtnHandler);
        block.removeEventListener('scroll', scrollHandler);
    }
}

/**
 * @param {HTMLElement} con
 * @param {HTMLElement} btnLeft
 * @param {HTMLElement} btnRight
 */

function buttonVisibility(con, btnLeft, btnRight) {
    const scrollWidth = con.scrollWidth;
    const elWidth = con.clientWidth;
    const nowScroll = con.scrollLeft;

    btnLeft.style.display = nowScroll > 0 ? 'flex' : 'none';
    btnRight.style.display = scrollWidth > elWidth + nowScroll ? 'flex' : 'none';
}