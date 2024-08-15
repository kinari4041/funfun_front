/**
 * @param {Array} cateData 
 */

export default function subCategory(cateData) {
    const cateEl = document.querySelectorAll('.cate-title-el');
    const cateNav = document.querySelector("#cate-nav");

    cateEl.forEach((el) => {
        el.addEventListener('mouseenter', (e) => {
            const dataSet = e.target.dataset.text;
            updateNav(cateNav, dataSet, cateData);
            
            cateNav.addEventListener('mouseleave', () => {
                removeItem(cateNav);
            })
        });
    });
}

const updateNav = (cateNav, dataSet, cateData) => {
    removeItem(cateNav);
    createList(cateNav);
    appendItem(dataSet, cateData);
}

const createList = (cateNav) => {
    const cateItem = document.createElement("div");
    cateItem.classList.add('cate-item');
    cateItem.innerHTML = `
        <div class="cate-item-wrap">
            <ul class="cate-items">
            </ul>
        </div>
    `;
    cateNav.append(cateItem);
}

const appendItem = (dataSet, itemData) => {
    const cateItems = document.querySelector(".cate-items");
    itemData.forEach((data) => {
        if (dataSet === `${data.id}`) {
            const cateItem = document.createElement("li");
            cateItem.innerHTML = `<Link to="#">${data.title}</Link>`;
            cateItems.append(cateItem);
        }
    });
}

// 리스트를 초기화하는 메서드
const removeItem = (cateNav) => {
    const existEl = cateNav.querySelector('.cate-item');
    if (existEl) existEl.remove();
}