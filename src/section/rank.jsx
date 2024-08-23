import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectRank } from "util/apiService";

const Aside = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProjectRank();
                setData(response);
                console.log(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>불러오는중...</p>;
    if (error) return <p>랭킹을 불러오는 도중 문제가 발생했습니다.</p>;

    return (
        <aside>
            <p className="aside-title"><i className="fa-solid fa-ranking-star"></i>실시간 프로젝트 랭킹</p>
            <ul className="rank-wrap">
                {data.map((item) => (
                    <li key={item.projectId}>
                        <Link to="/">
                            <div class="rank-items">
                                <div class="rank-items__front">
                                    <p class="rank-number">{item.projectRank}</p>
                                    <p class="rank-title">{item.articleTitle}</p>
                                </div>
                                <div class="rank-items__back">
                                    <p class="rank-like">
                                        <i class="fa-solid fa-heart"></i>
                                        {item.projectLikes}
                                    </p>
                                    <p class="rank-title">{item.userNickname}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}

            </ul>
            <Link to="#">
                <div className="aside-ad">
                    <p>AD AREA</p>
                </div>
            </Link>
        </aside>
    )
}

export default Aside;