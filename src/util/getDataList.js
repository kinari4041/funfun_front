/** 
 * 데이터를 무작위로 렌더링하는 메서드
 * @param {HTMLElement} wrap
 * @param {number} count
*/
export function renderDataList(data, wrap, count) {
    const getRandomList = (data, count) => {
        const randomDataList = [...data].sort(() => 0.5 - Math.random());
        return randomDataList.slice(0, count);
    }; 
    render(wrap, getRandomList(data, count))
}


/** 
 * 광고등록을 한 프로젝트들을 무작위로 렌더링하는 메서드
 * @param {HTMLElement} wrap
 * @param {number} count
*/
export function renderPremiumList(data, wrap, count) {
    const getPremiumList = (data, count) => {
        const pdata = data.filter(item => item.projectPremium === 1);
        return [...pdata].sort(() => 0.5 - Math.random()).slice(0, count);
    };
    render(wrap, getPremiumList(data, count))
}


/**
 * 최신 날짜순으로 정렬하여 렌더링하는 메서드
 * @param {HTMLElement} wrap
 * @param {number} start
 * @param {number} end
*/
export function renderRecentList(data, wrap, start ,end) {
    const getRecentList = (data, start, end) => {
        const RecentList = [...data].sort((a, b) => 
            new Date(b.projectUpload).getTime() - new Date(a.projectUpload).getTime());
        return RecentList.slice(start, end);
    };
    render(wrap, getRecentList(data, start, end))
}


/**
 * 좋아요가 높은 순서대로 정렬하여 렌더링하는 메서드
 * @param {HTMLElement} wrap
 * @param {number} start
 * @param {number} end
*/
export function renderPopularList(data, wrap, start, end) {
    const getPopularList = (data, start, end) => {
        const PopularList = [...data].sort((a, b) => b.like - a.like)
        return PopularList.slice(start, end);
    };
    render(wrap, getPopularList(data, start, end))
}


/**
 * 평점이 높은 순서대로 정렬하여 렌더링하는 메서드
 * @param {HTMLElement} wrap
 * @param {number} start
 * @param {number} end
*/
export function renderRateList(data, wrap, start, end) {
    const getRateList = (data, start, end) => {
        const PopularList = [...data].sort((a, b) => b.rate - a.rate)
        return PopularList.slice(start, end);
    };
    render(wrap, getRateList(data, start, end))
}


/**
 * 데이터를 좋아요가 높은 순서대로 정렬하여 매개변수로 받은 count의 수만큼 자른 후
 * 배열로 내보내는 메서드
 * @param {Array} projects
 * @param {number} count
 * @returns {Array}
 */
// 프로젝트 데이터와 출력하고 싶은 데이터의 개수를 매개변수로 받아서
export function getProjectRankList (projects, count) {
    // 새롭게 만든 배열을 반환함
    return projects
      // sort의 비교 함수에 like 값을 매개변수로 주고 값이 큰 순서로 배열을 정렬함
      .sort((a, b) => b.like - a.like)
      // count 수 만큼 배열을 잘라냄
      .slice(0, count)
      // 순위 표시를 위해 기존에 있는 배열의 순위값을 덮어씌움
      .map((projects, index) => ({
        ...projects,
        rank: index + 1
      }));
  };
  
    //   // 데이터 fetch, 데이터베이스를 외부에서 불러올 때
    //   axios.get('/api/products') // 데이터가 있는 API 엔드포인트
    //     .then(response => {
    //       const products = response.data;
  
    //       // 데이터를 `project_like` 기준으로 내림차순 정렬하고 상위 10개 추출
    //       const sortedProducts = products
    //         .sort((a, b) => b.project_like - a.project_like)
    //         .slice(0, 10);
    //      .catch(error => {
    //        console.error('데이터를 가져오는 데 실패했습니다:', error);
    //      });
    // }, []);


// const render = (wrap, items) => {
//     wrap.innerHTML = items.map(data => {
//         return `
//             <div key={index} class="list-project-wrap">
//                 <img src="https://picsum.photos/400/400?random=${data.id}" alt=${data.title} />
//                 <p class="project-cate title">[ ${data.name} ] ${data.title} </p>
//                 <div class="project-cate rate">
//                     <p class="project-cate-rate percent">
//                         <b>${data.achive}%</b> 달성
//                     </p>
//                         <p class="project-cate-rate star">★ ${data.rate}</p>
//                 </div>
//                 <p class="project-cate name">${data.author}</p>
//             </div>
//         `;
//     }).join('');
// }

/**
 * 최종적으로 만들어진 데이터를 매개변수로 받아서 
 * HTML 엘리먼트로 렌더링하는 메서드
 * @param {Array} items
 * @param {HTMLElement} wrap
 */
const render = (wrap, items) => {
    wrap.innerHTML = items.map(data => {
        return `
            <div key={index} class="list-project-wrap">
                <img src="https://picsum.photos/400/400?random=${data.projectId}" alt=${data.projectName} />
                <p class="project-cate title">[ ${data.projectName} ] ${data.articleTitle} </p>
                <div class="project-cate rate">
                    <p class="project-cate-rate percent">
                        <b>${data.projectGoal === 0 ? 0 : Math.floor((data.projectCurrent / data.projectGoal) * 100)}%</b> 달성
                    </p>
                        <p class="project-cate-rate star">★ ${data.projectFun}</p>
                </div>
                <p class="project-cate name">${data.userNickname}</p>
            </div>
        `;
    }).join('');
}