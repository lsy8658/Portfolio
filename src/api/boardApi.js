import axios from "axios";
export const boardApi = () => {
  const getBoardApi = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/board/getBoards");
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getBoardApi,
  };
};
