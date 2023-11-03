import { useContext, useEffect, useState } from "react";

import { SocketContext } from "../../context/SocketContextProvider";
import { useNavigate, useParams } from "react-router-dom";
export default function ChatTest() {
  const [id, setId] = useState("");

  const { ws } = useContext(SocketContext);
  const navigate = useNavigate();
  const roomHandler = () => {
    console.log(id);
    ws.emit("join-room", id);
    navigate(`/chatRoom/${id}`);
  };
  const data = useParams();
  const createRoom = ({ roomID }) => {
    console.log("roomID", roomID);
  };
  useEffect(() => {
    ws.on("creact-room", createRoom);
  }, [data]);
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={roomHandler}>room 참여</button>
    </div>
  );
}

// const [desc, setDesc] = useState("");
