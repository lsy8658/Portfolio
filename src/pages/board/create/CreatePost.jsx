import { useNavigate } from "react-router-dom";
import "./createPost.scss";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { boardApi } from "../../../api/boardApi";
import IsLoading from "../../../components/loading/IsLoading";
import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
export default function CreatePost() {
  const { postBoardApi } = boardApi();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const queryClient = useQueryClient();

  const goBoard = () => {
    navigate("/board");
  };

  const { isLoading, mutate } = useMutation({
    mutationKey: ["postBoard"],
    mutationFn: postBoardApi,
  });

  if (isLoading) {
    return <IsLoading />;
  }

  const create = () => {
    if (name.length < 0 || desc.length < 0) return;
    console.log("name =>", name);
    console.log("desc =>", desc);

    mutate({ name, desc });

    // queryClient.invalidateQueries(["getBoard"]);
  };
  return (
    <div className="section">
      <div className="create_post_container">
        <form className="form">
          <input
            type="text"
            className="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="닉네임을 입력해 주세요."
          />
          <textarea
            placeholder="내용을 입력해 주세요."
            rows="7"
            type="text"
            className="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </form>
        <div className="board_btns">
          <div className="board_btn" onClick={goBoard}>
            돌아가기
          </div>
          <div className="board_btn" onClick={create}>
            작성하기
          </div>
        </div>
      </div>
    </div>
  );
}
