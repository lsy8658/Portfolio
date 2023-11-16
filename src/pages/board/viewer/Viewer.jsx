import { useNavigate, useParams } from "react-router-dom";
import "./viewer.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Viewer() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();
  const [dateStr, setDateStr] = useState();
  const postData = useSelector((state) => {
    return state.pagin.dataArray;
  });

  useEffect(() => {
    if (postData.length > 0 && params.id) {
      const data = postData.filter((post) => {
        return post._id === params.id;
      });
      setPost(data[0]);
    } else {
      navigate("/board");
    }
  }, []);

  useEffect(() => {
    if (post) {
      const createDate = new Date(post.createdAt);
      const year = createDate.getFullYear();
      const month = createDate.getMonth() + 1;
      const date = createDate.getDate();
      const dateStr = `${year}-${month >= 10 ? month : "0" + month}-${
        date >= 10 ? date : "0" + date
      }`;
      setDateStr(dateStr);
    }
  }, [post]);
  const goBoard = () => {
    navigate("/board");
  };
  return (
    <div className="section">
      {post && (
        <div className="post_container">
          <p className="date">{dateStr}</p>
          <p className="name">name: {post.name}</p>
          <p className="desc">{post.desc}</p>
        </div>
      )}
      <div className="backBtn" onClick={goBoard}>
        돌아가기
      </div>
    </div>
  );
}
