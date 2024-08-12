/**
 * @param {Array} cateData 
 */

export const renderSubCateEl = (cateData) => {
    // 대분류 카테고리 엘리먼트들을 저장한 변수 생성
    const cateEl = document.querySelectorAll('.cate-title-el');
    // 카테고리 네비게이션 앨리먼트를 저장한 변수 생성
    const cateNav = document.querySelector("#cate-nav");

    // 각각의 대분류 엘리먼트에게 마우스가 들어오는걸 감지하는 이벤트 리스너 등록
    cateEl.forEach((el) => {
        el.addEventListener('mouseenter', (selected) => {
            // 소분류 클래스명을 가진 엘리먼트를 선택하여 현재 존재하는지 여부를 저장하고
            // 현재 마우스를 올린 엘리먼트의 데이터셋 저장 이후, 소분류 리스트 div를 생성하고
            // 생성한 div에 소분류 엘리먼트 삽입
            let isOpen = document.querySelectorAll('.cate-item').length;
            createList(cateNav);
            appendItem(selected.target.dataset.text, cateData);
            
            // 만약 소분류가 이미 열려있는 상태라면
            // 현재 선택된 엘리먼트 데이터값을 새로고침하고
            // 소분류 리스트 삭제후 재생성
            if (isOpen) {
                removeItem();
                createList(cateNav);
                appendItem(selected.target.dataset.text, cateData);
            }

            // 마우스가 네비게이션을 완전히 벗어나면 소분류 삭제
            cateNav.addEventListener('mouseleave', () => {
                removeItem();
            })
        });
    });
};

// 소분류 리스트가 들어갈 div를 생성하는 메서드
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

// 생성한 div 안에 채워넣을 리스트를 만드는 메서드
const appendItem = (dataSet, itemData) => {
    itemData.forEach((data) => {
        // 현재 선택한 대분류 데이터셋과, 소분류 리스트를 매개변수로 받아서
        // 선택한 대분류에 해당하는 소분류 리스트만 div에 삽입하도록 함
        if (dataSet === `${data.id}`) {
            let cateItems = document.createElement("li");
            cateItems.innerHTML = `<Link to="#">${data.title}</Link>`;
            document.querySelector(".cate-items").append(cateItems);
        }
    })
}

// 리스트를 초기화하는 메서드
const removeItem = () => {
    const cateItemEl = document.querySelectorAll('.cate-item');
    for (let i = 0; i < cateItemEl.length; i++) {
        const parent = document.querySelector('.cate-item');
        parent.replaceChildren();
        parent.remove();
    }
}