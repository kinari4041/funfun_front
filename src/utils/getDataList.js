/**
 * @param {Array} projects
 * @param {HTMLElement} wrap
 * @param {number} count
*/

export function renderDataList(projects, wrap, count, isRandom) {
    const getRandomList = (projectList, count) => {
        const randomDataList = [...projectList].sort(() => 0.5 - Math.random());
        return randomDataList.slice(0, count);
    };
    let items;
    (isRandom) ? items = getRandomList(projects, count) : items = projects;
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