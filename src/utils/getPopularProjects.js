/** JSDoc 
 * @param {Array} projects - 데이터 배열을 매개변수로 받음
 * @param {number} count - 출력하고 싶은 데이터의 개수를 매개변수로 받음
 * @returns {Array} - 새롭게 만들어진 데이터 배열을 반환함
 */

// 프로젝트 데이터와 출력하고 싶은 데이터의 개수를 매개변수로 받아서
export const getPopularProjects = (projects, count) => {
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