/**
 * @param {Array} data
 * @param {HTMLElement} wrap
 * @param {number} count
*/

export function renderDataList(data, wrap, count, isPremium) {

    let items;

    // 모든 리스트들을 무작위로 가져오는 메서드
    const getRandomList = (data, count) => {
        const randomDataList = [...data].sort(() => 0.5 - Math.random());
        return randomDataList.slice(0, count);
    };

    // 광고등록을 한 목록만 가져오는 메서드
    const getPremiumList = (data) => {
        const premiumData = data.filter(item => item.premium === 1)
        return premiumData;
    };

    if (isPremium) {
        items = getRandomList(getPremiumList(data), count)
    } else {
    items = getRandomList(data, count)
    } 

    render(wrap, items)
}

export function renderRecentDataList(data, wrap, start ,end) {
    const getRecentList = (data, start, end) => {
        const RecentList = [...data].sort((a, b) => new Date(b.upload).getTime() - new Date(a.upload).getTime());
        return RecentList.slice(start, end);
    };

    let items = getRecentList(data, start, end);

    render(wrap, items)
}

export function renderPopularDataList(data, wrap, start, end, type) {
    const getPopularList = (data, start, end) => {
        const PopularList = [...data].sort((a, b) => b.like - a.like)
        return PopularList.slice(start, end);
    };

    const getRateList = (data, start, end) => {
        const PopularList = [...data].sort((a, b) => b.rate - a.rate)
        return PopularList.slice(start, end);
    };

    let items = (type === "like") ? getPopularList(data, start, end) : getRateList(data, start, end);

    render(wrap, items)
}

const render = (wrap, items) => {
    wrap.innerHTML = items.map(data => {
        return `
            <div key={index} class="list-project-wrap">
                <img src="https://picsum.photos/400/400?random=${data.id}" alt=${data.title} />
                <p class="project-cate title">[ ${data.name} ] ${data.title} </p>
                <div class="project-cate rate">
                    <p class="project-cate-rate percent">
                        <b>${data.achive}%</b> 달성
                    </p>
                        <p class="project-cate-rate star">★ ${data.rate}</p>
                </div>
                <p class="project-cate name">${data.author}</p>
            </div>
        `;
    }).join('');
}