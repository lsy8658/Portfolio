import "./board.scss";
import { useQuery } from "@tanstack/react-query";
import { boardApi } from "../../api/boardApi";
import IsLoading from "../../components/loading/IsLoading";
import Pagination from "../../components/pagination/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Board() {
  const navigate = useNavigate();
  const setNewArray = useSelector((state) => {
    return state.pagin.dataArray;
  });

  const { getBoardApi } = boardApi();

  const { data, isLoading } = useQuery({
    queryKey: ["getBoard"],
    queryFn: getBoardApi,
  });

  if (isLoading) {
    return <IsLoading />;
  }

  const viewPost = (id) => {
    navigate(`/viewer/${id}`);
  };

  return (
    <div className="section">
      <div className="board_container">
        {setNewArray &&
          setNewArray.map((post, index) => (
            <div className="post_box" key={post._id}>
              <div
                className="post"
                onClick={() => {
                  viewPost(post._id);
                }}
              >
                <p className="desc">{post.desc}</p>
                <p className="name">{post.name}</p>
              </div>
            </div>
          ))}
      </div>
      {data && <Pagination data={data} viewCount={8} />}

      <button
        className="createBtn"
        onClick={() => {
          navigate("/createPost");
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

/*
  1. 페이지 네이션 구현하기
  2. 데이터 전송 create
*/
