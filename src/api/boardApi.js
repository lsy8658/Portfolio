import axios from "axios";
export const boardApi = () => {
  const getBoardApi = async () => {
    try {
      const res = await axios.get(
        "https://port-0-portfolio-server-5mk12alp0x0f0c.sel5.cloudtype.app/api/board/getBoards"
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
  const postBoardApi = async (data) => {
    try {
      const res = await axios.post(
        "https://port-0-portfolio-server-5mk12alp0x0f0c.sel5.cloudtype.app/api/board/createBoard",
        data
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    getBoardApi,
    postBoardApi,
  };
};
