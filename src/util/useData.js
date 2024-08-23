import { useState, useEffect } from 'react';
import { getProjectList, getPremiumList } from './apiService';

/** 
 * 프로젝트 게시글 데이터를 가공하고 렌더링하는 커스텀 훅
 * @param {HTMLElement} wrap - 렌더링할 html 요소
 * @param {number} count - 렌더링할 데이터 항목 수
 * @param {string} dataType - 데이터 종류
 * @param {number} [start] - 시작 인덱스
 * @param {number} [end] - 끝 인덱스
 * @param {Array} [externalData] - 외부 데이터
*/

export const useData = (count, dataType, start, end, exData) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;

                switch (dataType) {
                    case 'premium':
                        response = await getPremiumList();
                        break;
                    case 'recent':
                        response = await getProjectList();
                        break;
                    case 'popular':
                        response = await getProjectList();
                        break;
                    case 'rate':
                        response = await getProjectList();
                        break;
                    case 'random':
                        response = await getProjectList();
                        break;
                    case 'default':
                        response = await getProjectList();
                        break;
                    default:
                        response = await getProjectList();
                        break;
                }
                const dataSlice = response.slice(start, end);
                const dataList = dataSlice.slice(0, count)
        
                setData(dataList);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
        
    }, [dataType, count, start, end, exData]);

    return [data, error];
};


// 렌더링 메소드
export const renderData = (wrap, items) => {
    if (!wrap) return;
    
    wrap.innerHTML = items.map(data => {
        return `
            <div class="list-project-wrap">
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
