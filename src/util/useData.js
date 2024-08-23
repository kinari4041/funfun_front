import { useState, useEffect } from 'react';
import { getProjectList } from './apiService';

/** 
 * 프로젝트 게시글 데이터를 가공하고 렌더링하는 커스텀 훅
 * @param {HTMLElement} wrap - 렌더링할 html 요소
 * @param {number} count - 렌더링할 데이터 항목 수
 * @param {string} renderType - 렌더링할 데이터 종류
 * @param {number} [start] - 시작 인덱스
 * @param {number} [end] - 끝 인덱스
 * @param {Array} [externalData] - 외부 데이터
*/

export function useData(wrap, count, renderType, start, end, exData) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await getProjectList();
                if (isMounted) {
                    setData(response);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (wrap && data.length > 0) {
            let itemsToRender = [];
            switch (renderType) {
                case 'premium':
                    itemsToRender = getPremiumList(data, wrap, count);
                    break;
                case 'recent':
                    itemsToRender = getRecentList(data, wrap, start, end);
                    break;
                case 'popular':
                    itemsToRender = getPopularList(data, wrap, start, end);
                    break;
                case 'rate':
                    itemsToRender = getRateList(data, wrap, start, end);
                    break;
                case 'normal':
                    itemsToRender = exData || data;
                    break;
                default:
                    itemsToRender = getRandomList(data, wrap, count);
            }
            render(wrap, itemsToRender)
        }
    }, [data, wrap, count ,renderType, start, end, exData]);

    return [data, error]
}

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

// 아래부터 데이터 가공 메서드들
const getRandomList = (data, count) => {
    const randomDataList = [...data].sort(() => 0.5 - Math.random());
    return randomDataList.slice(0, count);
}; 

const getPremiumList = (data, count) => {
    const pdata = data.filter(item => item.projectPremium === 1);
    return [...pdata].sort(() => 0.5 - Math.random()).slice(0, count);
};

const getRecentList = (data, start, end) => {
    const RecentList = [...data].sort((a, b) => 
        new Date(b.projectUpload).getTime() - new Date(a.projectUpload).getTime());
    return RecentList.slice(start, end);
};

const getPopularList = (data, start, end) => {
    const PopularList = [...data].sort((a, b) => b.like - a.like)
    return PopularList.slice(start, end);
};

const getRateList = (data, start, end) => {
    const PopularList = [...data].sort((a, b) => b.rate - a.rate)
    return PopularList.slice(start, end);
};

// // 프로젝트 데이터와 출력하고 싶은 데이터의 개수를 매개변수로 받아서
// export function getProjectRankList (count) {
//     // 새롭게 만든 배열을 반환함
//     return projects
//       // sort의 비교 함수에 like 값을 매개변수로 주고 값이 큰 순서로 배열을 정렬함
//       .sort((a, b) => b.like - a.like)
//       // count 수 만큼 배열을 잘라냄
//       .slice(0, count)
//       // 순위 표시를 위해 기존에 있는 배열의 순위값을 덮어씌움
//       .map((projects, index) => ({
//         ...projects,
//         rank: index + 1
//       }));
//   };
  